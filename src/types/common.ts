export interface ObjectSize {
  width: number;
  height: number;
}

export interface Vector2D {
  x: number;
  y: number;
}

export interface GameObject {
  position: Vector2D;
  size: ObjectSize;
  render(): void;
}

export interface TargetObject extends GameObject {
  key: string;
}

export interface GameGroup {
  objects: Array<GameObject>;

  add(gameObject: GameObject): void;
}

export interface FactoryTargets {
  create(key: string): TargetObject;
}
