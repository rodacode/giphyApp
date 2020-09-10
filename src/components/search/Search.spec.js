import React from "react";
import Search from "./Search";
import { render, screen } from "@testing-library/react";

describe("Search [COMPONENT]", () => {
  beforeEach(async () => {
    render(<Search />);
  });
  test("it should render the search container", async () => {
    expect(screen.getByTestId("search__container")).toBeInTheDocument();
  });
  test("it should render the search input", async () => {
    expect(screen.getByTestId("search__input")).toBeInTheDocument();
  });
  test("it should render the search button", async () => {
    expect(screen.getByTestId("search__button")).toBeInTheDocument();
  });
});
