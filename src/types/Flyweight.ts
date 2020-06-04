export interface Flyweight {
  getImage(): HTMLImageElement;
}

export interface FlyweightFactory {
  getFlyweight(img: string): Flyweight;
}
