import { ObjectSize, TargetObject, Vector2D } from '@/types/common';
import * as TargetImage from '@/assets/bottle.png';

export default class Target implements TargetObject {
  private canvasCtx: CanvasRenderingContext2D

  private speed = 0;

  private image: HTMLImageElement;

  position: Vector2D = { x: 0, y: 0 };

  key: string;

  size: ObjectSize;

  constructor(ctx: CanvasRenderingContext2D, key: string) {
    this.size = { width: 40, height: 50 };
    this.canvasCtx = ctx;
    this.key = key;

    this.image = new Image(this.size.width, this.size.height);
    this.image.src = TargetImage.default;

    this.dropTarget();
  }

  private setStartPosition(): void {
    const maxXPosition = this.canvasCtx.canvas.width - this.size.width;
    const minXPosition = maxXPosition - maxXPosition / 3;

    this.position = {
      x: Math.random() * (maxXPosition - minXPosition) + minXPosition,
      y: this.size.height * -4,
    };
  }

  private setSpeed(): void {
    const maxSpeed = 7;
    const minSpeed = 2;

    this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  }

  private dropTarget(): void {
    this.setStartPosition();
    this.setSpeed();
  }

  render(): void {
    if (this.position.y >= this.canvasCtx.canvas.height) {
      this.dropTarget();
    } else {
      this.position.y += this.speed;
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
