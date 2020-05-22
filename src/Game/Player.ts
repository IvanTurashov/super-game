import { debounce } from 'decko';
import { ObjectSize, Vector2D, GameObject } from '@/types/common';
import Bullet from '@/Game/Bullet';

import * as RightArm from '@/assets/player/1_right arm.png';
import * as LeftArm from '@/assets/player/1_left arm.png';
import * as RightLeg from '@/assets/player/1_right leg.png';
import * as LeftLeg from '@/assets/player/1_left leg.png';
import * as Hend from '@/assets/player/1_hend.png';
import * as Body from '@/assets/player/1_body.png';
import * as Head from '@/assets/player/1_head.png';
import * as Weapon from '@/assets/WEAPON.png';
import * as ShotGun from '@/assets/shot gun.png';

const sizes: Record<string, ObjectSize> = {
  leftArmImage: {
    width: 325,
    height: 235,
  },
  rightArmImage: {
    width: 219,
    height: 332,
  },
  leftLegImage: {
    width: 217,
    height: 255,
  },
  rightLegImage: {
    width: 217,
    height: 255,
  },
  bodyImage: {
    width: 442,
    height: 496,
  },
  headImage: {
    width: 753,
    height: 773,
  },
  hendImage: {
    width: 122,
    height: 179,
  },
  weaponImage: {
    width: 349,
    height: 272,
  },
  shotGunImage: {
    width: 138,
    height: 193,
  },
};
class Player implements GameObject {
    position: Vector2D

    bullets: Array<GameObject> = []

    sizes: Record<string, ObjectSize>;

    size: ObjectSize = {
      width: 0,
      height: 0,
    }

    private p = 0.2;

    private angleWeapon = 0

    private canvasCtx: CanvasRenderingContext2D

    private weaponPosition: Vector2D

    private leftArmImage: HTMLImageElement = new Image()

    private rightArmImage: HTMLImageElement = new Image()

    private leftLegImage: HTMLImageElement = new Image()

    private rightLegImage: HTMLImageElement = new Image()

    private bodyImage: HTMLImageElement = new Image()

    private headImage: HTMLImageElement = new Image()

    private hendImage: HTMLImageElement = new Image()

    private weaponImage: HTMLImageElement = new Image()

    private shotGunImage: HTMLImageElement = new Image()

    private lastShot = 0;

    constructor(canvasCtx: CanvasRenderingContext2D, position: Vector2D) {
      this.position = position;
      this.canvasCtx = canvasCtx;

      this.leftArmImage.src = LeftArm.default;
      this.rightArmImage.src = RightArm.default;
      this.leftLegImage.src = LeftLeg.default;
      this.rightLegImage.src = RightLeg.default;
      this.bodyImage.src = Body.default;
      this.headImage.src = Head.default;
      this.hendImage.src = Hend.default;
      this.weaponImage.src = Weapon.default;
      this.shotGunImage.src = ShotGun.default;

      this.sizes = this.generateSizes(sizes);
      this.weaponPosition = {
        x: this.position.x + this.sizes.bodyImage.width,
        y: this.position.y + this.sizes.bodyImage.height * 0.8,
      };

      this.initEvents();
    }

    private generateSizes(originSizes: Record<string, ObjectSize>): Record<string, ObjectSize> {
      const newSize = Object.keys(originSizes).reduce((prev, curr) => ({
        ...prev,
        [curr]: {
          width: sizes[curr].width * this.p,
          height: sizes[curr].height * this.p,
        },
      }), {});

      return newSize;
    }

    render() {
      this.canvasCtx.beginPath();
      this.canvasCtx.fillStyle = 'black';
      this.canvasCtx.fill();
      this.renderPlayer();
      this.renderBullets();

      if ((Date.now() - this.lastShot) < 100) {
        this.canvasCtx.drawImage(
          this.shotGunImage,
          this.weaponPosition.x + this.sizes.weaponImage.width,
          this.weaponPosition.y - this.sizes.weaponImage.height * 0.25,
          this.sizes.shotGunImage.width,
          this.sizes.shotGunImage.height,
        );
      }
    }

    renderPlayer() {
      this.renderLeftArm();

      this.renderLeftLeg();
      this.renderRightLeg();

      this.renderBody();
      this.renderHead();

      this.renderRightArm();
      // this.renderLeftLeg();
    }

    renderBody() {
      this.canvasCtx.drawImage(
        this.bodyImage,
        this.position.x,
        this.position.y,
        this.sizes.bodyImage.width,
        this.sizes.bodyImage.height,
      );
    }

    renderLeftArm() {
      this.canvasCtx.drawImage(
        this.leftArmImage,
        this.position.x + this.sizes.bodyImage.width * 0.8,
        this.position.y + this.sizes.bodyImage.height * 0.25,
        this.sizes.leftArmImage.width,
        this.sizes.leftArmImage.height,
      );
    }

    renderRightArm() {
      this.canvasCtx.drawImage(
        this.rightArmImage,
        this.position.x - this.sizes.bodyImage.width * 0.3,
        this.position.y + this.sizes.bodyImage.height * 0.25,
        this.sizes.rightArmImage.width,
        this.sizes.rightArmImage.height,
      );
    }

    renderRightLeg() {
      this.canvasCtx.drawImage(
        this.rightLegImage,
        this.position.x + this.sizes.bodyImage.width * 0.1,
        this.position.y + this.sizes.bodyImage.height * 0.75,
        this.sizes.rightLegImage.width,
        this.sizes.rightLegImage.height,
      );
    }

    renderLeftLeg() {
      const position = {
        x: this.position.x + this.sizes.bodyImage.width * 0.55,
        y: this.position.y + this.sizes.bodyImage.height * 0.75,
      };
      this.canvasCtx.drawImage(
        this.leftLegImage,
        position.x,
        position.y,
        this.sizes.leftLegImage.width,
        this.sizes.leftLegImage.height,
      );

      this.renderWeapon(position);
    }


    renderWeapon(leftLegPosition: Vector2D) {
      this.weaponPosition = {
        x: leftLegPosition.x + this.sizes.leftLegImage.width * 1.5,
        y: this.position.y + 10,
      };
      this.canvasCtx.drawImage(
        this.weaponImage,
        this.weaponPosition.x,
        this.weaponPosition.y,
        this.sizes.weaponImage.width,
        this.sizes.weaponImage.height,
      );
    }

    renderHead() {
      this.canvasCtx.drawImage(
        this.headImage,
        this.position.x - this.sizes.bodyImage.width * 0.45,
        this.position.y - this.sizes.bodyImage.height * 1.05,
        this.sizes.headImage.width,
        this.sizes.headImage.height,
      );
    }

    initEvents() {
      this.canvasCtx.canvas.addEventListener('click', (event) => {
        this.addBullet({ x: event.x, y: event.y });
      });
      // this.canvasCtx.canvas.addEventListener('mousemove', (event) => {
      //   this.rotateWeapon({ x: event.x, y: event.y });
      // });
    }

    // @debounce(30)
    // rotateWeapon(mousePosition: Vector2D) {
    //   this.angleWeapon = Math.atan2(
    //     mousePosition.x - this.weaponPosition.x,
    //     mousePosition.y - this.weaponPosition.y,
    //   );
    // }

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
      this.lastShot = Date.now();

      const bulletPosition: Vector2D = {
        x: this.weaponPosition.x + this.sizes.weaponImage.width,
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
