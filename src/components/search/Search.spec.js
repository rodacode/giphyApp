import React from 'react';
import Search from './Search';
import { render, screen } from '@testing-library/react';

describe('Search [COMPONENT]', () => {

    beforeEach(async () => {
        render(<Search />);
    })
    test('renders search container', async () => {
        expect(screen.getByTestId('search__container')).toBeInTheDocument();
      });
});