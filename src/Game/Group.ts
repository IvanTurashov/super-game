import { GameGroup, GameObject } from '@/types/common';

export default class Group implements GameGroup {
  objects: Array<GameObject>;

  constructor() {
    this.objects = [];
  }

  add(object: GameObject): void {
    this.objects.push(object);
  }
}
