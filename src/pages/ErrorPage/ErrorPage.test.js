import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from './ErrorPage';

describe('<ErrorPage />', () => {
  test('it should mount', () => {
    render(<ErrorPage />);
    
    const errorPage = screen.getByTestId('ErrorPage');

    expect(errorPage).toBeInTheDocument();
  });
});