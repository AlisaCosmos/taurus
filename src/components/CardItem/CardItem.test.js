import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardItem from './CardItem';

describe('<CardItem />', () => {
  test('it should mount', () => {
    render(<CardItem />);
    
    const cardItem = screen.getByTestId('CardItem');

    expect(cardItem).toBeInTheDocument();
  });
});