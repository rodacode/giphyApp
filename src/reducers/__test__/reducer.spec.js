import mainReducer, { initialState } from "../index";
import {
  loadGifsPending,
  loadGifsSuccess,
  loadGifsFailed,
  setIsTrending,
  setQuery,
  setType,
  sortByDate,
} from "../../actions";

import mockResponse from "../../mocks/mockResponse.json";

const gifs = mockResponse.data;

const error = "load fail";

describe("[REDUCERS]", () => {
  it("should return the initial state as default", () => {
    expect(mainReducer(undefined, {})).toEqual(initialState);
  });

  describe("[LOAD_GIFS_PENDING]", () => {
    it("should set the isLoading to true", () => {
      expect(mainReducer(initialState, loadGifsPending())).toEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });

  describe("[LOAD_GIFS_SUCCESS]", () => {
    it("should set the gifs loaded", () => {
      expect(mainReducer(initialState, loadGifsSuccess(gifs))).toEqual({
        ...initialState,
        items: gifs,
        isLoading: false,
        isTrending: true,
      });
    });
  });

  describe("[LOAD_GIFS_FAILED]", () => {
    it("should set the error when the load fail", () => {
      expect(mainReducer(initialState, loadGifsFailed(error))).toEqual({
        ...initialState,
        isLoading: false,
        errors: error,
      });
    });
  });

  describe("[SET_IS_TRENDING]", () => {
    it("should set the is Tre", () => {
      expect(mainReducer(initialState, setIsTrending(true))).toEqual({
        ...initialState,
        isTrending: true,
      });
    });
  });

  describe("[SET_QUERY]", () => {
    const query = "ABA";
    it("should set the is Tre", () => {
      expect(mainReducer(initialState, setQuery(query))).toEqual({
        ...initialState,
        query,
      });
    });
  });

  describe("[SET_TYPE]", () => {
    const type = "stickers";
    it("should set the is Tre", () => {
      expect(mainReducer(initialState, setType(type))).toEqual({
        ...initialState,
        type,
      });
    });
  });

  describe("[SORT_BY_DATE]", () => {
    it("should set sortByDate to true", () => {
      expect(mainReducer(initialState, sortByDate(true))).toEqual({
        ...initialState,
        sortByDate: true
      });
    });
  });
});
