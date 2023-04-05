import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forma from './Forma';

describe('<Forma />', () => {
  test('it should mount', () => {
    render(<Forma />);
    
    const forma = screen.getByTestId('Forma');

    expect(forma).toBeInTheDocument();
  });
});