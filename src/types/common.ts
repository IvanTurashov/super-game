export interface ObjectSize {
  width: number;
  height: number;
}

export interface Vector2D {
  x: number;
  y: number;
}

export interface GameFigure {
  position: Vector2D;
  size: ObjectSize;
}

export interface GameObject extends GameFigure {
    render(): void;
}
