import { Observer, Subject } from '@/types/Observer';
import { Vector2D } from '@/types/common';

enum MouseButton {
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
}

type MouseWatcherState = {
  clickPosition: Vector2D;
  type: 'left' | 'right' | 'middle' | 'not_checking';
}
export default class MouseWatcher implements Subject {
  private observers: Observer[] = []

  private canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.subscribeDomEvents();
  }

  public state: MouseWatcherState = {
    clickPosition: { x: -1, y: -1 },
    type: 'not_checking',
  }

  public attach(obs: Observer) {
    const isExist = this.observers.includes(obs);
    if (isExist) {
      console.log('This observer is exist');
      return;
    }
    this.observers.push(obs);
  }

  public notify() {
    this.observers.forEach((o) => o.update(this));
  }

  public detach(obs: Observer) {
    this.observers = this.observers.filter((o) => o === obs);
  }

  private setState(newState: MouseWatcherState) {
    this.state = newState;
  }

  private subscribeDomEvents() {
    this.canvas.addEventListener('click', (event: MouseEvent) => {
      const mouseButton = (() => {
        switch (event.button) {
          case 0: {
            return MouseButton.Left;
          }
          case 1: {
            return MouseButton.Middle;
          }
          case 2: {
            return MouseButton.Right;
          }
          default: {
            return 'not_checking';
          }
        }
      })();

      if (mouseButton === 'not_checking') {
        return;
      }

      this.setState({
        clickPosition: {
          x: event.x,
          y: event.y,
        },
        type: mouseButton,
      });
      this.notify();
    });
  }
}
