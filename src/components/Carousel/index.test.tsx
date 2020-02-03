import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Carousel from './Carousel';

describe('Carousel Structure', () => {
  let container;
  beforeEach(() => {
    container = render(
      <Carousel startIndex={0} stopIndex={4} upperLimit={5} lowerLimit={0}>
        {new Array(6).fill(' ').map((val, idx) => (
          <p key={idx} data-testid={`${idx}`}>
            Hello World
          </p>
        ))}
      </Carousel>,
    );
  });

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('renders 4 paragraphs', () => {
    expect(container.getAllByText('Hello World').length).toEqual(4);
  });

  it('renders a next button', () => {
    expect(container.getByTestId('next-button')).toBeInTheDocument();
  });

  it('renders next paragraph if the next button pressed', () => {
    const node = container.getByTestId('next-button');
    fireEvent.click(node);
    expect(container.getByTestId('4')).toBeInTheDocument();
    expect(container.getByTestId('prev-button')).toBeInTheDocument();
  });

  it('renders prev paragraph if the prev button pressed', () => {
    const next = container.getByTestId('next-button');
    fireEvent.click(next);
    const prev = container.getByTestId('prev-button');
    fireEvent.click(prev);
    expect(container.getByTestId('0')).toBeInTheDocument();
    expect(container.queryByTestId('prev-button')).toBeFalsy();
  });
});
