import { ObjectSize, TargetObject, Vector2D } from '@/types/common';
import * as TargetImage from '@/assets/bottle.png';
import imageFlyweightFactory from '@/patterns/ImageFlyweightFactory';

const targetFlyweight = imageFlyweightFactory(TargetImage.default);

export default class Target implements TargetObject {
  private canvasCtx: CanvasRenderingContext2D

  private speed = 0;

  position: Vector2D = { x: 0, y: 0 };

  key: string;

  size: ObjectSize;

  constructor(ctx: CanvasRenderingContext2D, key: string) {
    this.size = { width: 40, height: 50 };
    this.canvasCtx = ctx;
    this.key = key;

    this.dropTarget();
  }

  private setStartPosition(): void {
    const maxXPosition = this.canvasCtx.canvas.width - this.size.width;
    const minXPosition = maxXPosition - maxXPosition / 3;

    this.position = {
      x: Math.random() * (maxXPosition - minXPosition) + minXPosition,
      y: Math.random() * this.size.height * 4 - this.size.height * 4,
    };
  }

  private setSpeed(): void {
    const maxSpeed = 6;
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
      targetFlyweight.getImage(),
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
  }
}
