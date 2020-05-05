import { TargetFigure } from '@/types/Target';

export interface TargetGroupCore {
  targets: Array<TargetFigure>;

  add(targetFigure: TargetFigure): void;
}
