import { _mock } from './_mock';

export const _carouselSmallCards = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.carouselSmallTitle(index),
  coverUrl: _mock.image.product(index),
}));

export const _carouselBigCards = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.carouselBigTitle(index),
  coverUrl: _mock.image.product(index),
}));
