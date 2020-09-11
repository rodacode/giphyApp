import React from "react";
import SearchOptions from "../SearchOptions";
import { render, screen,fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux'
import { store } from "../../../reducers";

describe("SearchOptions [COMPONENT]", () => {
  beforeEach(() => {
    render(<Provider store={store}><SearchOptions /></Provider>);
  });
  test("it should render the search container", () => {
    expect(screen.getByTestId("searchOptions__container")).toBeInTheDocument();
  });
  test("it should render the search input", () => {
    expect(screen.getByTestId("switch__gifs")).toBeInTheDocument();
  });


});
