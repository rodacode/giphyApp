import React from "react";
import Home from './Home';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from "../../reducers";


describe('Home [COMPONENT]', () => {

    beforeEach(() => {
        render(<Provider store={store}><Home /></Provider>);
    })
    test('renders home main container', () => {
        expect(screen.getByTestId('home__container')).toBeInTheDocument();
      });
});