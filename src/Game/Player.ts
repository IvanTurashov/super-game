
import Bullet from '@/Game/Bullet';
import MouseWatcher from '@/Game/MouseWatcher';
import { ObjectSize, Vector2D, GameObject } from '@/types/common';
import { Observer, Subject } from '@/types/Observer';

import RightArm from '@/assets/player/1_right arm.png';
import LeftArm from '@/assets/player/1_left arm.png';
import RightLeg from '@/assets/player/1_right leg.png';
import LeftLeg from '@/assets/player/1_left leg.png';
import Hend from '@/assets/player/1_hend.png';
import Body from '@/assets/player/1_body.png';
import Head from '@/assets/player/1_head.png';
import Weapon from '@/assets/WEAPON.png';
import ShotGun from '@/assets/shot gun.png';
import shootSound from '@/assets/shoot.mp3';

import playSound from '@/shared/utils';

const leftArmImage = new Image();
const rightArmImage = new Image();
const leftLegImage = new Image();
const rightLegImage = new Image();
const bodyImage = new Image();
const headImage = new Image();
const hendImage = new Image();
const weaponImage = new Image();
const shotGunImage = new Image();

leftArmImage.src = LeftArm;
rightArmImage.src = RightArm;
leftLegImage.src = LeftLeg;
rightLegImage.src = RightLeg;
bodyImage.src = Body;
headImage.src = Head;
hendImage.src = Hend;
weaponImage.src = Weapon;
shotGunImage.src = ShotGun;

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

class Player implements GameObject, Observer {
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

    private leftArmImage: HTMLImageElement

    private rightArmImage: HTMLImageElement

    private leftLegImage: HTMLImageElement

    private rightLegImage: HTMLImageElement

    private bodyImage: HTMLImageElement

    private headImage: HTMLImageElement

    private hendImage: HTMLImageElement

    private weaponImage: HTMLImageElement

    private shotGunImage: HTMLImageElement

    private lastShot = 0;

    constructor(canvasCtx: CanvasRenderingContext2D, position: Vector2D) {
      this.position = position;
      this.canvasCtx = canvasCtx;

      this.leftArmImage = leftArmImage;
      this.rightArmImage = rightArmImage;
      this.leftLegImage = leftLegImage;
      this.rightLegImage = rightLegImage;
      this.bodyImage = bodyImage;
      this.headImage = headImage;
      this.hendImage = hendImage;
      this.weaponImage = weaponImage;
      this.shotGunImage = shotGunImage;

      this.sizes = this.generateSizes(sizes);
      this.weaponPosition = {
        x: this.position.x + this.sizes.bodyImage.width,
        y: this.position.y + this.sizes.bodyImage.height * 0.8,
      };
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
      const position = {
        x: this.position.x + this.sizes.bodyImage.width * 0.8,
        y: this.position.y + this.sizes.bodyImage.height * 0.25,
      };
      this.canvasCtx.drawImage(
        this.leftArmImage,
        this.position.x + this.sizes.bodyImage.width * 0.8,
        this.position.y + this.sizes.bodyImage.height * 0.25,
        this.sizes.leftArmImage.width,
        this.sizes.leftArmImage.height,
      );
      this.renderWeapon(position);
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
      this.canvasCtx.drawImage(
        this.leftLegImage,
        this.position.x + this.sizes.bodyImage.width * 0.55,
        this.position.y + this.sizes.bodyImage.height * 0.75,
        this.sizes.leftLegImage.width,
        this.sizes.leftLegImage.height,
      );
    }


    renderWeapon(leftArmPosition: Vector2D) {
      this.weaponPosition = {
        x: leftArmPosition.x + this.sizes.leftArmImage.width * 0.8,
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

    update(sub: Subject) {
      if (!(sub instanceof MouseWatcher)) {
        return;
      }

      if (sub.state.type !== 'left') {
        return;
      }

      const newBullet = this.createBullet({
        x: sub.state.clickPosition.x,
        y: sub.state.clickPosition.y,
      });

      this.bullets.push(newBullet);
      playSound(shootSound);
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

    createBullet(targetPosition: Vector2D): Bullet {
      this.lastShot = Date.now();

      const bulletPosition: Vector2D = {
        x: this.weaponPosition.x + this.sizes.weaponImage.width,
        y: this.weaponPosition.y + 3,
      };
      const dx = (targetPosition.x - bulletPosition.x);
      const dy = (targetPosition.y - bulletPosition.y);
      const mag = Math.sqrt(dx * dx + dy * dy);
      const direction: Vector2D = {
        x: dx / mag,
        y: dy / mag,
      };
      const bullet = new Bullet(this.canvasCtx, bulletPosition, direction);

      return bullet;
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
