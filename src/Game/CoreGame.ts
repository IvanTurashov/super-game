import { CoreGame, GameConfig } from '@/types/Core';
import Target from '@/Game/Target';
import TargetGroup from '@/Game/TargetGroup';

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private gameConfig: GameConfig;

  private targetGroup: TargetGroup;

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.gameConfig = gameConfig;
    this.targetGroup = new TargetGroup(this.canvasCtx);
    this.init();
  }

  private init() {
    this.canvasCtx.canvas.width = this.gameConfig.width;
    this.canvasCtx.canvas.height = this.gameConfig.height;
  }

  addTarget() {
    const target = new Target().create();

    this.targetGroup.add(target);
  }
}

export default Game;
