import React from "react";
import Search from "./Search";
import { render, screen,fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux'
import { store } from "../../reducers";

describe("Search [COMPONENT]", () => {
  beforeEach(() => {
    render(<Provider store={store}><Search /></Provider>);
  });
  test("it should render the search container", () => {
    expect(screen.getByTestId("search__container")).toBeInTheDocument();
  });
  test("it should render the search input", () => {
    expect(screen.getByTestId("search__input")).toBeInTheDocument();
  });
  test("it should render the search button", () => {
    expect(screen.getByTestId("search__button")).toBeInTheDocument();
  });

  test("it should change the input value when typed in th input", async () => {

    const searchInput = screen.getByTestId("search__input");
    await userEvent.type(searchInput, 'ABA');

    expect(searchInput.value).toBe('ABA');
  });

  test("it should call the handleSearch function when search button is clicked", () => {

    const handleSearch = jest.fn();

    const searchButton = screen.getByTestId("search__button");
    fireEvent.click(searchButton);
    screen.debug();

    expect(handleSearch).toBeCalled();
  });
});
