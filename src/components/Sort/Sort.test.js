import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sort from './Sort';

describe('<Sort />', () => {
  test('it should mount', () => {
    render(<Sort />);
    
    const sort = screen.getByTestId('Sort');

    expect(sort).toBeInTheDocument();
  });
});