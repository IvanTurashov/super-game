import { TargetGroupCore } from '@/types/TargetGroup';
import { TargetFigure } from '@/types/Target';

export default class TargetGroup implements TargetGroupCore {
  private canvasCtx: CanvasRenderingContext2D;

  targets: Array<TargetFigure>;

  constructor(ctx: CanvasRenderingContext2D) {
    this.canvasCtx = ctx;
    this.targets = [];
  }

  add(targetFigure: TargetFigure): void {
    this.targets.push(targetFigure);

    this.canvasCtx.beginPath();
    this.canvasCtx.rect(
      targetFigure.coords.x,
      targetFigure.coords.y,
      targetFigure.width,
      targetFigure.height,
    );
    this.canvasCtx.fillStyle = 'blue';
    this.canvasCtx.fill();
  }
}
