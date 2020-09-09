import React from 'react';
import GifsList from './Gifslist';
import { render, screen } from '@testing-library/react';

describe('GifsList [COMPONENT]', () => {

    beforeEach(async () => {
        render(<GifsList />);
    })
    test('renders GifsList component', async () => {
        expect(screen.getByTestId('gifsList__container')).toBeInTheDocument()
      });
});