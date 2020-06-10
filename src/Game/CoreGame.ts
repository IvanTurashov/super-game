import { bind } from 'decko';
import Player from '@/Game/Player';
import Collision from '@/Game/Collision';
import TargetFactory from '@/Game/TargetFactory';
import MouseWatcher from '@/Game/MouseWatcher';
import FireEffect from '@/Game/FireEffect';

import { CoreGame, GameConfig } from '@/types/Core';
import { GameObject, TargetObject } from '@/types/common';
import { Observer } from '@/types/Observer';

import * as Background from '@/assets/BACKGROUND.png';
import BackgroundMusic from '@/assets/background.mp3';
import playSound from '@/shared/utils';

const backgroundImage = new Image();
backgroundImage.src = Background.default;

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private targets: Array<GameObject> = [];

  private player: Player;

  private mouseWatcher: MouseWatcher;

  private targetFactory: TargetFactory;

  private fireEffect: FireEffect

  private backgroundImage: HTMLImageElement;

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.canvasCtx.canvas.width = gameConfig.width;
    this.canvasCtx.canvas.height = gameConfig.height;
    this.mouseWatcher = new MouseWatcher(this.canvasCtx.canvas);
    this.targetFactory = new TargetFactory(this.canvasCtx);
    this.fireEffect = new FireEffect(this.canvasCtx);

    this.player = new Player(
      this.canvasCtx,
      {
        x: 50,
        y: this.canvasCtx.canvas.height - 150,
      },
    );
    this.mouseWatcher.attach(this.player);
    this.mouseWatcher.attach(this.fireEffect);
    this.backgroundImage = backgroundImage;
    this.render();
    playSound(BackgroundMusic, true);
  }

  @bind
  shoot(bullet: GameObject, target: GameObject) {
    this.player.destroyBullet(bullet);
    this.targets = this.targets.filter((t) => t !== target);

    this.emitWinner((target as TargetObject).key);
  }

  render() {
    const { canvas } = this.canvasCtx;

    this.canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    this.renderBackground();
    this.player.render();
    this.fireEffect.render();
    this.renderTargets();
    Collision.checkCollision(this.player.bullets, this.targets, this.shoot);
    window.requestAnimationFrame(() => {
      this.renderTargets();
      this.render();
    });
  }

  renderBackground() {
    const { canvas } = this.canvasCtx;
    this.canvasCtx.drawImage(this.backgroundImage, 0, 0, canvas.width, canvas.height);
  }

  addTarget(key: string) {
    const target = this.targetFactory.create(key);
    this.targets.push(target);
  }

  renderTargets() {
    this.targets.forEach((t) => {
      t.render();
    });
  }

  emitWinner(winnerName: string) {
    const onWin = new CustomEvent('win', {
      detail: { winnerName },
    });

    this.canvasCtx.canvas.dispatchEvent(onWin);
  }
}

export default Game;
