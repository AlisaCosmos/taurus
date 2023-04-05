import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutProjectPage from './AboutProjectPage';

describe('<AboutProjectPage />', () => {
  test('it should mount', () => {
    render(<AboutProjectPage />);
    
    const aboutProjectPage = screen.getByTestId('AboutProjectPage');

    expect(aboutProjectPage).toBeInTheDocument();
  });
});