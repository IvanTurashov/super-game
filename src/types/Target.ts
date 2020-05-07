import { ObjectSize, Vector2D } from './common';

export interface TargetCore {
  create(): TargetFigure;
}

export interface TargetFigure extends ObjectSize {
  key: string;
  coords: Vector2D;
}
