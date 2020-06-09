import { Observer, Subject } from '@/types/Observer';
import { Vector2D } from '@/types/common';

export default class MouseWatcher implements Subject {
  private observers: Observer[] = []

  private canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.subscribeDomEvents();
  }

  public state: Vector2D = { x: -1, y: -1 }

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

  private setState(x: number, y: number) {
    this.state.x = x;
    this.state.y = y;
  }

  private isStateValidate(): boolean {
    return (this.state.x >= 0) && (this.state.y >= 0);
  }

  private subscribeDomEvents() {
    this.canvas.addEventListener('click', (event: MouseEvent) => {
      this.setState(event.x, event.y);
      this.notify();
    });
    document.addEventListener('keypress', (event: KeyboardEvent) => {
      if (event.code !== 'Space' || !this.isStateValidate()) {
        return;
      }

      this.notify();
    });
    this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
      this.setState(event.x, event.y);
    });
  }
}
