import React from 'react';
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './index';

describe('Home Page', () => {
  afterEach(cleanup);

  it('calls fetch queries successfully', () => {
    act(() => {
      render(<Home />);
    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
  it('matches snapshot', () => {
    let container;
    act(() => {
      container = render(<Home />);
    });
    expect(container).toMatchSnapshot();
  });
  it('changes input', () => {
    let container;
    act(() => {
      container = render(<Home />);
    });
    const input = container.getByTestId('input');
    fireEvent.change(input, {
      target: {
        value: 'he',
      },
    });
    expect(input.value).toBe('he');
  });
});
