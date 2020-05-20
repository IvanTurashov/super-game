import { GameObject, ObjectSize, Vector2D } from '@/types/common';
import { gameConfig, targetSize } from '@/gameConfig';

export default class Target implements GameObject {
  private canvasCtx: CanvasRenderingContext2D

  key: string;

  size: ObjectSize;

  position: Vector2D;

  constructor(ctx: CanvasRenderingContext2D, key: string) {
    this.size = targetSize;
    this.position = this.targetPosition;
    this.canvasCtx = ctx;
    this.key = key;
  }

  private get targetPosition(): Vector2D {
    return {
      x: Math.round(Math.random() * (gameConfig.width - this.size.width)),
      y: Math.round(Math.random() * (gameConfig.height - this.size.height)),
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
