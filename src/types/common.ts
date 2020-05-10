export interface ObjectSize {
  width: number;
  height: number;
}

export interface Vector2D {
  x: number;
  y: number;
}

export interface GameObject {
  key?: string;
  bullets?: Array<GameObject>;
  position: Vector2D;
  size: ObjectSize;
  render(): void;
}

export interface GameGroup {
  objects: Array<GameObject>;

  add(gameObject: GameObject): void;
}
