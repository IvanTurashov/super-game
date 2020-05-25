import { FactoryTargets, TargetObject } from '@/types/common';
import Target from '@/Game/Target';

export default class TargetFactory implements FactoryTargets {
  private canvasCtx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.canvasCtx = ctx;
  }

  create(key: string): TargetObject {
    return new Target(this.canvasCtx, key);
  }
}
