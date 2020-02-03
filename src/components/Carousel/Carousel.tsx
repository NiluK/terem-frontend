import React, { useState } from 'react';
import * as Styled from './Carousel.styled';

interface Carousel {
  startIndex: number;
  stopIndex: number;
  lowerLimit: number;
  upperLimit: number;
  children: JSX.Element[];
}

const Carousel = (props: Carousel): JSX.Element => {
  const { startIndex, stopIndex, upperLimit, lowerLimit, children } = props;
  const [carouselStart, setCarouselStart] = useState(startIndex);
  const [carouselStop, setCarouselStop] = useState(stopIndex);

  const onNextClick = (): void => {
    setCarouselStart(carouselStart + 1);
    setCarouselStop(carouselStop + 1);
  };

  const onPrevClick = (): void => {
    setCarouselStart(carouselStart - 1);
    setCarouselStop(carouselStop - 1);
  };

  const renderedItems = children?.slice(carouselStart, carouselStop);

  return (
    <Styled.CarouselContainer>
      {carouselStart !== lowerLimit && (
        <Styled.Button
          left
          data-testid="prev-button"
          disabled={carouselStart === lowerLimit}
          onClick={onPrevClick}
        >
          &#x3008;
        </Styled.Button>
      )}
      {renderedItems}
      {carouselStop !== upperLimit && (
        <Styled.Button
          data-testid="next-button"
          disabled={carouselStop === upperLimit}
          onClick={onNextClick}
        >
          &#x3009;
        </Styled.Button>
      )}
    </Styled.CarouselContainer>
  );
};

export default Carousel;
