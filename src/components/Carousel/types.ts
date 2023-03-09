export interface ICarouselProps {
  list: Array<CarouselItem>;
  index: number;
  setIndex: (index: number) => void;
  navigation: any;
}

export type CarouselItem = {
  title: string;
  description: string;
  id: number;
};
