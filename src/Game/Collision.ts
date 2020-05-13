import { GameGroup, GameObject } from '@/types/common';
import Bullet from '@/Game/Bullet';

export default class Collision {
  static checkCollision(group1: Array<GameObject>, group2: GameGroup, onCollide: () => void): void {
    group1.forEach((obj1) => {
      group2.objects.forEach((obj2) => {
        const inXRange = (
          obj1.position.x + obj1.size.width > obj2.position.x
          && obj1.position.x + obj1.size.width < obj2.position.x + obj1.size.width
        );
        const inYRange = (
          obj1.position.y + obj1.size.height > obj2.position.y
          && obj1.position.y + obj1.size.height < obj2.position.y + obj2.size.height
        );

        if (inXRange && inYRange) onCollide();
      });
    });
  }
}
