import {
  TargetCore,
  TargetFigure,
} from '@/types/Target';
import { Vector2D } from '@/types/common';

import { gameConfig, targetSize } from '@/gameConfig';

export default class Target implements TargetCore {
  private key: string;

  constructor() {
    this.key = '';
  }

  private static get targetCoords(): Vector2D {
    return {
      x: Math.round(Math.random() * (gameConfig.width - targetSize.width)),
      y: Math.round(Math.random() * (gameConfig.height - targetSize.height)),
    };
  }

  create(): TargetFigure {
    this.key = prompt('Input name of target. Quickly!') || '';

    return {
      ...targetSize,
      coords: Target.targetCoords,
      key: this.key,
    };
  }
}
