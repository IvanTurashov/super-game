import { TargetFigure, TargetObject } from '@/types/Target';
import { ObjectSize, Vector2D } from '@/types/common';
import { gameConfig, targetSize } from '@/gameConfig';

export default class Target implements TargetObject {
  private key: string;

  private canvasCtx: CanvasRenderingContext2D

  size: ObjectSize;

  position: Vector2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.key = '';
    this.size = targetSize;
    this.position = this.targetPosition;
    this.canvasCtx = ctx;
  }

  private get targetPosition(): Vector2D {
    return {
      x: Math.round(Math.random() * (gameConfig.width - this.size.width)),
      y: Math.round(Math.random() * (gameConfig.height - this.size.height)),
    };
  }

  create(): TargetFigure {
    this.key = prompt('Input name of target. Quickly!') || '';

    return {
      size: this.size,
      position: this.position,
      key: this.key,
    };
  }

  render(): void {
    this.canvasCtx.beginPath();
    this.canvasCtx.rect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
    this.canvasCtx.fillStyle = 'blue';
    this.canvasCtx.fill();
  }
}
