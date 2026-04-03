export interface ViewportState {
  x: number;
  y: number;
  scale: number;
}

export interface CameraAnimationOptions {
  duration?: number;
  easing?: EasingFunction;
  onComplete?: () => void;
  onCancel?: () => void;
}

export type EasingFunction = (t: number) => number;

export const Easing = {
  linear: (t: number) => t,
  easeInOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  easeInOutQuart: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInOutExpo: (t: number) =>
    t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
  easeOutBack: (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
} as const;

export class CameraAnimation {
  private animationFrameId: number | null = null;
  private startTime: number | null = null;
  private from: ViewportState;
  private to: ViewportState;
  private duration: number;
  private easing: EasingFunction;
  private onUpdate: (state: ViewportState, progress: number) => void;
  private onComplete?: () => void;
  private onCancel?: () => void;
  private isCancelled = false;

  constructor(
    from: ViewportState,
    to: ViewportState,
    onUpdate: (state: ViewportState, progress: number) => void,
    options: CameraAnimationOptions = {}
  ) {
    this.from = { ...from };
    this.to = { ...to };
    this.onUpdate = onUpdate;
    this.duration = options.duration ?? 600;
    this.easing = options.easing ?? Easing.easeInOutCubic;
    this.onComplete = options.onComplete;
    this.onCancel = options.onCancel;
  }

  start() {
    if (this.animationFrameId !== null) {
      return;
    }

    this.startTime = performance.now();
    this.isCancelled = false;
    this.tick();
  }

  private tick = () => {
    if (this.isCancelled) {
      return;
    }

    const now = performance.now();
    const elapsed = now - (this.startTime ?? now);
    const rawProgress = Math.min(elapsed / this.duration, 1);
    const easedProgress = this.easing(rawProgress);

    const currentState: ViewportState = {
      x: this.lerp(this.from.x, this.to.x, easedProgress),
      y: this.lerp(this.from.y, this.to.y, easedProgress),
      scale: this.lerp(this.from.scale, this.to.scale, easedProgress),
    };

    this.onUpdate(currentState, easedProgress);

    if (rawProgress < 1) {
      this.animationFrameId = requestAnimationFrame(this.tick);
    } else {
      this.animationFrameId = null;
      this.onComplete?.();
    }
  };

  cancel() {
    this.isCancelled = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.onCancel?.();
  }

  isActive() {
    return this.animationFrameId !== null && !this.isCancelled;
  }

  private lerp(start: number, end: number, t: number) {
    return start + (end - start) * t;
  }
}

export class CameraController {
  private current: ViewportState;
  private activeAnimation: CameraAnimation | null = null;
  private onUpdate: (state: ViewportState) => void;

  constructor(initial: ViewportState, onUpdate: (state: ViewportState) => void) {
    this.current = { ...initial };
    this.onUpdate = onUpdate;
  }

  getState(): ViewportState {
    return { ...this.current };
  }

  setState(state: Partial<ViewportState>) {
    this.current = { ...this.current, ...state };
    this.onUpdate(this.current);
  }

  animateTo(target: Partial<ViewportState>, options?: CameraAnimationOptions) {
    if (this.activeAnimation?.isActive()) {
      this.activeAnimation.cancel();
    }

    const to: ViewportState = {
      x: target.x ?? this.current.x,
      y: target.y ?? this.current.y,
      scale: target.scale ?? this.current.scale,
    };

    this.activeAnimation = new CameraAnimation(
      this.current,
      to,
      (state) => {
        this.current = { ...state };
        this.onUpdate(this.current);
      },
      options
    );

    this.activeAnimation.start();
    return this.activeAnimation;
  }

  cancelAnimation() {
    this.activeAnimation?.cancel();
    this.activeAnimation = null;
  }

  isAnimating() {
    return this.activeAnimation?.isActive() ?? false;
  }

  fitToBounds(
    bounds: { minX: number; minY: number; maxX: number; maxY: number },
    containerWidth: number,
    containerHeight: number,
    options?: CameraAnimationOptions & { padding?: number; minScale?: number; maxScale?: number }
  ) {
    const padding = options?.padding ?? 96;
    const minScale = options?.minScale ?? 0.35;
    const maxScale = options?.maxScale ?? 1.25;

    const boundsWidth = Math.max(1, bounds.maxX - bounds.minX);
    const boundsHeight = Math.max(1, bounds.maxY - bounds.minY);
    const scale = Math.min(
      maxScale,
      Math.max(minScale, Math.min((containerWidth - padding) / boundsWidth, (containerHeight - padding) / boundsHeight))
    );

    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;

    return this.animateTo(
      {
        x: containerWidth / 2 - centerX * scale,
        y: containerHeight / 2 - centerY * scale,
        scale,
      },
      options
    );
  }

  focusOnPoint(
    worldX: number,
    worldY: number,
    containerWidth: number,
    containerHeight: number,
    targetScale?: number,
    options?: CameraAnimationOptions
  ) {
    const scale = targetScale ?? this.current.scale;

    return this.animateTo(
      {
        x: containerWidth / 2 - worldX * scale,
        y: containerHeight / 2 - worldY * scale,
        scale,
      },
      options
    );
  }

  zoomBy(factor: number, pivotX?: number, pivotY?: number, options?: CameraAnimationOptions) {
    const newScale = Math.max(0.1, Math.min(3, this.current.scale * factor));
    const scaleRatio = newScale / this.current.scale;

    let x = this.current.x;
    let y = this.current.y;

    if (pivotX !== undefined && pivotY !== undefined) {
      const worldX = (pivotX - this.current.x) / this.current.scale;
      const worldY = (pivotY - this.current.y) / this.current.scale;
      x = pivotX - worldX * newScale;
      y = pivotY - worldY * newScale;
    }

    return this.animateTo({ x, y, scale: newScale }, options);
  }
}
