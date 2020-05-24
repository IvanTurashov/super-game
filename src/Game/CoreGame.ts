import { bind } from 'decko';
import { CoreGame, GameConfig } from '@/types/Core';
import { GameObject, TargetObject } from '@/types/common';
import Player from '@/Game/Player';
import Collision from '@/Game/Collision';
import TargetFactory from '@/Game/TargetFactory';

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private targets: Array<GameObject> = [];

  private player: Player;

  private targetFactory: TargetFactory;

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.canvasCtx.canvas.width = gameConfig.width;
    this.canvasCtx.canvas.height = gameConfig.height;
    this.targetFactory = new TargetFactory(canvasCtx);
    this.player = new Player(
      this.canvasCtx,
      {
        x: 50,
        y: this.canvasCtx.canvas.height - 150,
      },
      {
        width: 50,
        height: 100,
      },
    );
    this.render();
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
    this.player.render();
    this.renderTargets();
    Collision.checkCollision(this.player.bullets, this.targets, this.shoot);
    window.requestAnimationFrame(() => {
      this.render();
    });
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
