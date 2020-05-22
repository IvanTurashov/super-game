import { ObjectSize, Vector2D, GameObject } from '@/types/common';
import * as BulletImage from '@/assets/shot.png';

class Bullet implements GameObject {
    size: ObjectSize = { width: 40, height: 20 }

    position: Vector2D

    private direction: Vector2D

    private canvasCtx: CanvasRenderingContext2D

    private speed = 80

    private velocity: Vector2D

    private image: HTMLImageElement

    constructor(canvasCtx: CanvasRenderingContext2D, position: Vector2D, direction: Vector2D) {
      this.position = position;
      this.direction = direction;
      this.canvasCtx = canvasCtx;
      this.velocity = {
        x: direction.x * this.speed,
        y: direction.y * this.speed,
      };

      this.image = new Image(this.size.width, this.size.height);
      this.image.src = BulletImage.default;
    }

    render() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      this.canvasCtx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height,
      );
    }
}

export default Bullet;
