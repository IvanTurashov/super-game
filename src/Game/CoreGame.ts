import { CoreGame, GameConfig } from '@/types/Core';
import { GameObject } from '@/types/common';
import Target from '@/Game/Target';
import TargetGroup from '@/Game/TargetGroup';
import Player from '@/Game/Player';

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private gameConfig: GameConfig;

  private targetGroup: TargetGroup;

  private player: GameObject | undefined

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.gameConfig = gameConfig;
    this.targetGroup = new TargetGroup(this.canvasCtx);

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

  render() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.player!.render();
    window.requestAnimationFrame(() => {
      this.render();
    });
  }

  addTarget() {
    const target = new Target(this.canvasCtx).create();

    this.targetGroup.add(target);
  }
}

export default Game;
