import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from "../../reducers";

describe('Header [COMPONENT]', () => {

    beforeEach(() => {
        render(<Provider store={store}><Header /></Provider>);
    })
    test('renders header main container', () => {
        expect(screen.getByTestId('header__container')).toBeInTheDocument();
      });
});