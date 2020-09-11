import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Giphy App', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('main__container')).toBeInTheDocument();
});
