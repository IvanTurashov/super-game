import { bind } from 'decko';
import { CoreGame, GameConfig } from '@/types/Core';
import { GameObject } from '@/types/common';
import Target from '@/Game/Target';
import Player from '@/Game/Player';
import Collision from '@/Game/Collision';

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private targets: Array<GameObject> = [];

  private player: Player;

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.canvasCtx.canvas.width = gameConfig.width;
    this.canvasCtx.canvas.height = gameConfig.height;
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
    const target = Target.create(this.canvasCtx, key);
    this.targets.push(target);
  }

  renderTargets() {
    this.targets.forEach((t) => {
      t.render();
    });
  }
}

export default Game;
