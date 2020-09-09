import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header [COMPONENT]', () => {

    beforeEach(async () => {
        render(<Header />);
    })
    test('renders header main container', async () => {
        expect(screen.getByTestId('header__container')).toBeInTheDocument();
      });
});