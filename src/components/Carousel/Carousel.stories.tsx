import React from 'react';
import Carousel from './Carousel';
import Card from '../Card';

export default {
  component: Carousel,
  title: 'Carousel',
};

export const Default = () => {
  return (
    <Carousel startIndex={0} stopIndex={4} upperLimit={5} lowerLimit={0}>
      {new Array(6).fill(' ').map((val, idx) => (
        <p key={idx} data-testid={`${idx}`}>
          Hello World
        </p>
      ))}
    </Carousel>
  );
};

export const withImages = () => {
  return (
    <Carousel startIndex={0} stopIndex={4} upperLimit={5} lowerLimit={0}>
      {new Array(10).fill(' ').map((val, idx) => (
        <img key={idx} src="http://placehold.it/350x350" />
      ))}
    </Carousel>
  );
};

export const withCards = () => {
  return (
    <Carousel startIndex={0} stopIndex={4} upperLimit={5} lowerLimit={0}>
      {new Array(10).fill(' ').map((val, idx) => (
        <Card
          key={idx}
          img={'http://placehold.it/350x350'}
          imageHeight={150}
          title="Example"
          location="Example Location"
        />
      ))}
    </Carousel>
  );
};
