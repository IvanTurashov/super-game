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
  position: Vector2D;
  size: ObjectSize;
  render(): void;
}

export interface GameGroup {
  objects: Array<GameObject>;

  add(gameObject: GameObject): void;
}

export interface Factory {
  create(key: string): GameObject;
}
