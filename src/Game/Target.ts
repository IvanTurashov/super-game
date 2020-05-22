import { GameObject, ObjectSize, Vector2D } from '@/types/common';
import * as TargetImage from '@/assets/bottle.png';

export default class Target implements GameObject {
  private canvasCtx: CanvasRenderingContext2D

  private speed: Vector2D;

  private image: HTMLImageElement;

  key: string;

  size: ObjectSize;

  position: Vector2D;

  constructor(ctx: CanvasRenderingContext2D, key: string) {
    this.size = { width: 60, height: 70 };
    this.canvasCtx = ctx;
    this.key = key;
    this.speed = { x: 1, y: 4 };

    this.position = this.startPosition;
    this.image = new Image(this.size.width, this.size.height);
    this.image.src = TargetImage.default;
  }

  private get startPosition(): Vector2D {
    return {
      x: this.canvasCtx.canvas.width,
      y: 0,
    };
  }

  render(): void {
    const directionX = Math.cbrt((this.canvasCtx.canvas.height - this.position.y) / 50);

    if (directionX < 0) {
      this.position = this.startPosition;
    } else {
      this.position.x -= directionX;
      this.position.y += this.speed.y;
    }

    this.canvasCtx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
  }
}
