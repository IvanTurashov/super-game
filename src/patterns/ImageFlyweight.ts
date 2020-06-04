import { Flyweight } from '@/types/Flyweight';

export default class ImageFlyweight implements Flyweight {
  private image = new Image();

  constructor(imgSrc: string) {
    this.image.src = imgSrc;
  }

  public getImage() {
    return this.image;
  }
}
