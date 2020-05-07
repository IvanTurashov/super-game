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
