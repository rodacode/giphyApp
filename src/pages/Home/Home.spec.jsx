import React from "react";
import Home from './Home';
import { render, screen } from '@testing-library/react';

describe('Home [COMPONENT]', () => {

    beforeEach(async () => {
        render(<Home />);
    })
    test('renders home main container', async () => {
        expect(screen.getByTestId('home__container')).toBeInTheDocument();
      });
});