import { ObjectSize, Vector2D, GameObject } from '@/types/common';

class Bullet implements GameObject {
    size: ObjectSize = { width: 20, height: 20 }

    position: Vector2D

    private direction: Vector2D

    private canvasCtx: CanvasRenderingContext2D

    private speed = 8

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
      this.canvasCtx.clearRect(
        this.position.x - 1,
        this.position.y - 1,
        this.size.width + 2,
        this.size.height + 2,
      );

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      this.canvasCtx.beginPath();
      this.canvasCtx.rect(
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height,
      );
      this.canvasCtx.fillStyle = 'green';
      this.canvasCtx.fill();
    }
}

export default Bullet;
