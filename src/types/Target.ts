export interface TargetCore {
  create(): TargetFigure
}

export interface TargetSize {
  width: number,
  height: number,
}

export interface TargetCoordinates {
  x: number,
  y: number,
}

export interface TargetFigure extends TargetSize {
  key: string,
  coords: TargetCoordinates,
}
