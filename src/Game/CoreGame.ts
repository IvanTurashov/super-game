import { CoreGame, GameConfig } from '@/types/Core';
import { GameObject } from '@/types/common';
import Target from '@/Game/Target';
import Player from '@/Game/Player';
import Bullet from '@/Game/Bullet';
import Group from '@/Game/Group';
import Collision from '@/Game/Collision';

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private gameConfig: GameConfig;

  private targets: Group;

  private player: GameObject | undefined;

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.gameConfig = gameConfig;
    this.targets = new Group();

    this.init();
  }

  private init() {
    this.canvasCtx.canvas.width = this.gameConfig.width;
    this.canvasCtx.canvas.height = this.gameConfig.height;
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

  static shoot() {
    console.log('Попал!');
  }

  render() {
    this.player!.render();
    Collision.checkCollision(this.player.bullets, this.targets, Game.shoot);
    window.requestAnimationFrame(() => {
      this.render();
    });
  }

  addTarget() {
    const target = new Target(this.canvasCtx);

    target.render();
    this.targets.add(target);
  }
}

export default Game;
