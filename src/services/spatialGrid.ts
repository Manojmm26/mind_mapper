export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ViewportBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export class SpatialGrid<T extends { id: string; x: number; y: number; width: number; height: number }> {
  private cellSize: number;
  private grid: Map<string, T[]> = new Map();
  private nodeCellKeys: Map<string, string[]> = new Map();

  constructor(cellSize: number = 500) {
    this.cellSize = cellSize;
  }

  clear() {
    this.grid.clear();
    this.nodeCellKeys.clear();
  }

  insert(item: T) {
    const minCellX = Math.floor(item.x / this.cellSize);
    const maxCellX = Math.floor((item.x + item.width) / this.cellSize);
    const minCellY = Math.floor(item.y / this.cellSize);
    const maxCellY = Math.floor((item.y + item.height) / this.cellSize);

    const cellKeys: string[] = [];

    for (let cx = minCellX; cx <= maxCellX; cx++) {
      for (let cy = minCellY; cy <= maxCellY; cy++) {
        const key = `${cx}:${cy}`;
        cellKeys.push(key);
        let list = this.grid.get(key);
        if (!list) {
          list = [];
          this.grid.set(key, list);
        }
        list.push(item);
      }
    }

    this.nodeCellKeys.set(item.id, cellKeys);
  }

  build(items: T[]) {
    this.clear();
    items.forEach((item) => this.insert(item));
  }

  query(bounds: ViewportBounds): T[] {
    const minCellX = Math.floor(bounds.minX / this.cellSize);
    const maxCellX = Math.floor(bounds.maxX / this.cellSize);
    const minCellY = Math.floor(bounds.minY / this.cellSize);
    const maxCellY = Math.floor(bounds.maxY / this.cellSize);

    const visited = new Set<string>();
    const result: T[] = [];

    for (let cx = minCellX; cx <= maxCellX; cx++) {
      for (let cy = minCellY; cy <= maxCellY; cy++) {
        const key = `${cx}:${cy}`;
        const list = this.grid.get(key);
        if (list) {
          for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (!visited.has(item.id)) {
              visited.add(item.id);
              // AABB intersection check
              if (
                item.x + item.width >= bounds.minX &&
                item.x <= bounds.maxX &&
                item.y + item.height >= bounds.minY &&
                item.y <= bounds.maxY
              ) {
                result.push(item);
              }
            }
          }
        }
      }
    }

    return result;
  }
}

export function computeViewportBounds(
  viewportX: number,
  viewportY: number,
  scale: number,
  width: number,
  height: number,
  padding: number = 100
): ViewportBounds {
  const safeScale = Math.max(0.01, scale);
  return {
    minX: -viewportX / safeScale - padding,
    minY: -viewportY / safeScale - padding,
    maxX: (width - viewportX) / safeScale + padding,
    maxY: (height - viewportY) / safeScale + padding,
  };
}
