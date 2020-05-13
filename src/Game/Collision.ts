import { GameObject } from '@/types/common';

export default class Collision {
  static checkCollision(
    objects1: Array<GameObject>,
    objects2: Array<GameObject>,
    onCollide: (obj1: GameObject, obj2: GameObject) => void,
  ): void {
    objects1.forEach((obj1) => {
      objects2.forEach((obj2) => {
        const inXRange = (
          ((obj1.position.x + obj1.size.width) > obj2.position.x)
          && ((obj1.position.x + obj1.size.width) < (obj2.position.x + obj2.size.width))
        );
        const inYRange = (
          (obj1.position.y > obj2.position.y)
          && (obj1.position.y < (obj2.position.y + obj2.size.height))
        );

        if (inXRange && inYRange) onCollide(obj1, obj2);
      });
    });
  }
}
