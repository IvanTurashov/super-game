import { Flyweight } from '@/types/Flyweight';
import ImageFlyweight from '@/patterns/ImageFlyweight';

const imageFlyweightFactory = (image: string): Flyweight => new ImageFlyweight(image);

export default imageFlyweightFactory;
