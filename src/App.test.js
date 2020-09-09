import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Giphy App', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Giphy App/i);
  expect(heading).toBeInTheDocument();
});
