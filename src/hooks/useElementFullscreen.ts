import { useEffect, useRef, useState } from 'react';

export function useElementFullscreen<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isSupported = typeof document !== 'undefined' && Boolean(document.fullscreenEnabled);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === elementRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const enterFullscreen = async () => {
    if (!isSupported || !elementRef.current) {
      return;
    }

    try {
      if (document.fullscreenElement && document.fullscreenElement !== elementRef.current) {
        await document.exitFullscreen();
      }

      await elementRef.current.requestFullscreen();
    } catch {
      // Ignore browser fullscreen failures and leave the current state unchanged.
    }
  };

  const exitFullscreen = async () => {
    if (typeof document === 'undefined' || document.fullscreenElement !== elementRef.current) {
      return;
    }

    try {
      await document.exitFullscreen();
    } catch {
      // Ignore browser fullscreen failures and leave the current state unchanged.
    }
  };

  const toggleFullscreen = async () => {
    if (isFullscreen) {
      await exitFullscreen();
      return;
    }

    await enterFullscreen();
  };

  return {
    elementRef,
    isFullscreen,
    isSupported,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
}