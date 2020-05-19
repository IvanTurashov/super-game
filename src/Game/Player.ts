import { debounce } from 'decko';
import { ObjectSize, Vector2D, GameObject } from '@/types/common';
import Bullet from '@/Game/Bullet';

class Player implements GameObject {
    size: ObjectSize

    position: Vector2D

    bullets: Array<GameObject> = []

    private weaponPosition: Vector2D

    private weaponSize: ObjectSize

    private angleWeapon = 0

    private canvasCtx: CanvasRenderingContext2D

    constructor(canvasCtx: CanvasRenderingContext2D, position: Vector2D, size: ObjectSize) {
      this.size = size;
      this.position = position;
      this.weaponPosition = {
        x: position.x - 20,
        y: position.y + size.height / 4,
      };
      this.weaponSize = {
        width: this.size.height,
        height: this.size.height / 4,
      };
      this.canvasCtx = canvasCtx;
      this.initEvents();
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
    }

    renderWeapon() {
      this.canvasCtx.save();
      // this.canvasCtx.translate(
      //   this.weaponPosition.x + this.weaponSize.width / 2,
      //   this.weaponPosition.y + this.weaponSize.height / 2,
      // );
      const weaponCenter: Vector2D = {
        x: this.weaponPosition.x + this.weaponSize.width / 2,
        y: this.weaponPosition.y + this.weaponSize.height / 2,
      };
      this.canvasCtx.translate(
        weaponCenter.x,
        weaponCenter.y,
      );
      console.log(this.angleWeapon * (180 / Math.PI));
      this.canvasCtx.rotate(this.angleWeapon * (180 / Math.PI));
      this.canvasCtx.translate(
        -weaponCenter.x,
        -weaponCenter.y,
      );
      this.canvasCtx.fillStyle = 'black';
      this.canvasCtx.rect(
        this.weaponPosition.x,
        this.weaponPosition.y,
        this.weaponSize.width,
        this.weaponSize.height,
      );
      this.canvasCtx.fill();
      this.canvasCtx.restore();
    }

    initEvents() {
      this.canvasCtx.canvas.addEventListener('click', (event) => {
        this.addBullet({ x: event.x, y: event.y });
      });
      this.canvasCtx.canvas.addEventListener('mousemove', (event) => {
        this.rotateWeapon({ x: event.x, y: event.y });
      });
    }

    @debounce(30)
    rotateWeapon(mousePosition: Vector2D) {
      let angle = Math.atan2(
        mousePosition.y - this.weaponPosition.y,
        mousePosition.x - this.weaponPosition.x,
      );
      if (angle < 0) {
        angle = -angle;
      }
      this.angleWeapon = angle;
    }

    renderBullets() {
      if (!this.bullets.length) {
        return;
      }

      this.bullets.forEach((b) => {
        const isBulletLost = this.checkLostBullet(b);
        if (isBulletLost) {
          this.destroyBullet(b);
          return;
        }
        b.render();
      });
    }

    addBullet(targetPosition: Vector2D) {
      const bulletPosition: Vector2D = {
        x: this.weaponPosition.x + this.weaponSize.width,
        y: this.weaponPosition.y,
      };
      const dx = (targetPosition.x - bulletPosition.x);
      const dy = (targetPosition.y - bulletPosition.y);
      const mag = Math.sqrt(dx * dx + dy * dy);
      const direction: Vector2D = {
        x: dx / mag,
        y: dy / mag,
      };
      const bullet = new Bullet(this.canvasCtx, bulletPosition, direction);
      this.bullets.push(bullet);
    }

    destroyBullet(bullet: GameObject) {
      this.bullets = this.bullets.filter((b) => b !== bullet);
    }

    checkLostBullet(bullet: GameObject) {
      if (
        (bullet.position.x + bullet.size.width) < 0
        || bullet.position.x > this.canvasCtx.canvas.width
      ) {
        return true;
      }

      if (
        (bullet.position.y + bullet.size.height) < 0
        || (bullet.position.y > this.canvasCtx.canvas.height)
      ) {
        return true;
      }

      return false;
    }
}

export default Player;
