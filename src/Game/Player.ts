import { ObjectSize, Vector2D, GameObject } from '@/types/common';

class Player implements GameObject {
    size: ObjectSize

    position: Vector2D

    private bullets: Array<Vector2D & ObjectSize> = []

    private weaponPosition: Vector2D

    private canvasCtx: CanvasRenderingContext2D

    private bulletSpeed = 8

    constructor(canvasCtx: CanvasRenderingContext2D, position: Vector2D, size: ObjectSize) {
      this.size = size;
      this.position = position;
      this.weaponPosition = {
        x: position.x - 20,
        y: position.y + size.height / 2,
      };
      this.canvasCtx = canvasCtx;
      this.initAtackEvent();
    }

    render() {
      this.canvasCtx.beginPath();
      this.canvasCtx.rect(
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height,
      );
      this.canvasCtx.fillStyle = 'black';
      this.canvasCtx.fill();
      this.renderWeapon();
      this.renderBullets();
      window.requestAnimationFrame(() => {
        this.render();
      });
    }

    renderWeapon() {
      this.canvasCtx.beginPath();
      this.canvasCtx.rect(
        this.weaponPosition.x,
        this.weaponPosition.y - this.size.height / 6,
        this.size.height,
        this.size.height / 4,
      );
      this.canvasCtx.fillStyle = 'black';
      this.canvasCtx.fill();
    }

    initAtackEvent() {
      this.canvasCtx.canvas.addEventListener('click', () => {
        this.addBullet();
      });
    }

    renderBullets() {
      if (!this.bullets.length) {
        return;
      }

      this.bullets.forEach((b) => {
        this.canvasCtx.clearRect(b.x, b.y, b.width, b.height + 1);
      });

      this.bullets = this.bullets.map((b) => ({
        x: b.x + this.bulletSpeed,
        y: b.y,
        width: b.width,
        height: b.height,
      }));

      this.bullets.forEach((b) => {
        this.renderBullet(b);
      });
    }

    renderBullet(bullet: Vector2D & ObjectSize) {
      this.canvasCtx.beginPath();
      this.canvasCtx.rect(
        bullet.x,
        bullet.y,
        bullet.width,
        bullet.height,
      );
      this.canvasCtx.fillStyle = 'green';
      this.canvasCtx.fill();
    }

    addBullet() {
      this.bullets.push({
        x: this.weaponPosition.x + this.size.height,
        y: this.weaponPosition.y - this.size.height / 6,
        width: 20,
        height: this.size.height / 4,
      });
    }
}

export default Player;
