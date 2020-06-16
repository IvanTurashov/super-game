import { ObjectSize, Vector2D, GameObject } from '@/types/common';
import { Observer, Subject } from '@/types/Observer';
import MouseWatcher from '@/Game/MouseWatcher';

export default class FireEffect implements GameObject, Observer {
  private canvasCtx: CanvasRenderingContext2D

  private lastEventDate = 0

  private isTextShown = false

  private timeForShowText = 300;

  position: Vector2D

  size: ObjectSize = {
    width: 200,
    height: 100,
  }

  constructor(canvasCtx: CanvasRenderingContext2D) {
    this.canvasCtx = canvasCtx;
    this.position = {
      x: this.canvasCtx.canvas.width / 2,
      y: 100,
    };
  }

  update(sub: Subject) {
    const isChecking = sub instanceof MouseWatcher && sub.state.type === 'left';

    if (!isChecking || this.isTextShown) {
      return;
    }

    this.isTextShown = true;
    setTimeout(() => {
      this.isTextShown = false;
    }, this.timeForShowText);
  }

  render() {
    if (!this.isTextShown) {
      return;
    }
    this.canvasCtx.font = '50px fantasy';

    const myGradient = this.canvasCtx.createLinearGradient(
      this.position.x,
      this.position.y,
      this.position.x,
      this.position.y - 35,
    );
    myGradient.addColorStop(0, 'red');
    myGradient.addColorStop(0.33, 'red');
    myGradient.addColorStop(0.33, 'yellow');
    myGradient.addColorStop(0.66, 'yellow');
    myGradient.addColorStop(0.66, 'green');
    myGradient.addColorStop(1, 'green');
    this.canvasCtx.fillStyle = myGradient;
    this.canvasCtx.textAlign = 'center';
    this.canvasCtx.fillText('BOOOOOOM!!!!!', this.position.x, this.position.y);
  }
}
