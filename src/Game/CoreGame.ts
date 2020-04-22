import { CoreGame, GameConfig } from '@/types/Core';

class Game implements CoreGame {
  private canvasCtx: CanvasRenderingContext2D;

  private gameConfig: GameConfig

  constructor(canvasCtx: CanvasRenderingContext2D, gameConfig: GameConfig) {
    this.canvasCtx = canvasCtx;
    this.gameConfig = gameConfig;
    this.init();
  }

  private init() {
    this.canvasCtx.canvas.width = this.gameConfig.width;
    this.canvasCtx.canvas.height = this.gameConfig.height;
  }

  render() {
    const halfWidth = this.gameConfig.width / 2;
    const halfHeight = this.gameConfig.height / 2;
    this.canvasCtx.beginPath();
    this.canvasCtx.ellipse(halfWidth, halfHeight, 100, 100, 0, 0, 360);
    this.canvasCtx.stroke();
  }
}

export default Game;
