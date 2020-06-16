import { GameObject } from '@/types/common';

export default class Collision {
  static checkCollision(
    objectsA: Array<GameObject>,
    objectsB: Array<GameObject>,
    onCollide: (objA: GameObject, objB: GameObject) => void,
  ): void {
    objectsA.forEach((objA) => {
      objectsB.forEach((objB) => {
        const rightSideObjA = objA.position.x + objA.size.width;
        const leftSideObjA = objA.position.x;
        const topSideObjA = objA.position.y;
        const bottomSideObjA = objA.position.y + objA.size.height;

        const rightSideObjB = objB.position.x + objB.size.width;
        const leftSideObjB = objB.position.x;
        const topSideObjB = objB.position.y;
        const bottomSideObjB = objB.position.y + objB.size.height;

        const inXRange = (rightSideObjA > leftSideObjB && rightSideObjA < rightSideObjB)
        || (leftSideObjA < rightSideObjB && leftSideObjA > leftSideObjB);

        const inYRange = (topSideObjA < bottomSideObjB && topSideObjA > topSideObjB)
        || (bottomSideObjA > topSideObjB && bottomSideObjA < bottomSideObjB);

        if (inXRange && inYRange) onCollide(objA, objB);
      });
    });
  }
}
