import { GameFigure, GameObject } from './common';

export interface TargetFigure extends GameFigure {
  key: string;
}

export interface TargetObject extends GameObject {
  create(): TargetFigure;
}
