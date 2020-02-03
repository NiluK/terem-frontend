import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './Card';

describe('Card Structure', () => {
  const title = 'Hello World';
  const location = 'Hello Location';
  let container;
  beforeEach(() => {
    container = render(
      <Card
        title={title}
        img="https://placehold.it/320x320"
        location={location}
      />,
    );
  });

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('renders title', () => {
    expect(container.getByText(title)).toBeInTheDocument();
  });
  it('renders image', () => {
    expect(container.getByAltText(title)).toBeInTheDocument();
  });
  it('renders location', () => {
    expect(container.getByText(location)).toBeInTheDocument();
  });
  it('renders svg location icon', () => {
    expect(container.queryByTestId('location-svg')).toBeInTheDocument();
  });
});

describe('Card Styles', () => {
  const title = 'Hello World';
  const location = 'Hello Location';

  it('renders image styles', () => {
    const container = render(
      <Card
        imageHeight={50}
        imageWidth={100}
        title={title}
        img="https://placehold.it/320x320"
        location={location}
      />,
    );
    expect(container.getByAltText(title)).toHaveStyle(`
      height: 50px;
      width: 100px
    `);
  });
});
