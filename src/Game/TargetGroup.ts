import { TargetGroupCore } from '@/types/TargetGroup';
import { TargetFigure } from '@/types/Target';

export default class TargetGroup implements TargetGroupCore {
  private canvasCtx: CanvasRenderingContext2D;

  targets: Array<TargetFigure>;

  constructor(ctx: CanvasRenderingContext2D) {
    this.canvasCtx = ctx;
    this.targets = [];
  }

  add(target: TargetFigure): void {
    this.targets.push(target);
  }
}
