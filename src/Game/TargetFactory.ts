import { Factory, GameObject } from '@/types/common';
import Target from '@/Game/Target';

export default class TargetFactory implements Factory {
  private canvasCtx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.canvasCtx = ctx;
  }

  create(key: string): GameObject {
    return new Target(this.canvasCtx, key);
  }
}
