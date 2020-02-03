import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Default = () => {
  return <Card img={'http://placehold.it/350x350'} title="Example" />;
};

export const withLocation = () => {
  return (
    <Card
      img={'http://placehold.it/350x350'}
      title="Example"
      location="Example Location"
    />
  );
};

export const withRestrictedImageWidth = () => {
  return (
    <Card
      img={'http://placehold.it/350x350'}
      imageWidth={50}
      title="Example"
      location="Example Location"
    />
  );
};

export const withRestrictedImageHeight = () => {
  return (
    <Card
      img={'http://placehold.it/350x350'}
      imageHeight={50}
      title="Example"
      location="Example Location"
    />
  );
};

export const withRestrictedImageWidthandHeight = () => {
  return (
    <Card
      img={'http://placehold.it/350x350'}
      imageWidth={50}
      imageHeight={40}
      title="Example"
      location="Example Location"
    />
  );
};
