import { ObjectSize, Vector2D, GameObject } from '@/types/common';
import * as BulletImage from '@/assets/shot.png';
import imageFlyweightFactory from '@/patterns/ImageFlyweightFactory';

const bulletFlyweight = imageFlyweightFactory(BulletImage.default);

class Bullet implements GameObject {
    size: ObjectSize = { width: 20, height: 10 }

    position: Vector2D

    private direction: Vector2D

    private canvasCtx: CanvasRenderingContext2D

    private speed = 80

    private velocity: Vector2D

    constructor(canvasCtx: CanvasRenderingContext2D, position: Vector2D, direction: Vector2D) {
      this.position = position;
      this.direction = direction;
      this.canvasCtx = canvasCtx;
      this.velocity = {
        x: direction.x * this.speed,
        y: direction.y * this.speed,
      };
    }

    render() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.canvasCtx.drawImage(
        bulletFlyweight.getImage(),
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height,
      );
    }
}

export default Bullet;
