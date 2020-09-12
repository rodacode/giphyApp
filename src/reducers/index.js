import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sortFunctionASC from '../helpers/sortFunction';

import {
  LOAD_GIFS_PENDING,
  LOAD_GIFS_SUCCESS,
  LOAD_GIFS_FAILED,
  SET_IS_TRENDING,
  SET_QUERY,
  SET_TYPE,
  SORT_BY_DATE
} from "../actions";

export const initialState = {
  items: [],
  isLoading: false,
  errors: [],
  isTrending: true,
  query: "",
  type: "gifs",
  gifPerPage: 20,
  rating: "g",
  offset: 0,
  sortByDate: false,
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_GIFS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_GIFS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case LOAD_GIFS_FAILED:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_IS_TRENDING:
      return {
        ...state,
        isTrending: action.payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SORT_BY_DATE:
      if (state.sortByDate) {
        return {
          ...state,
          sortByDate: action.payload,
        };
      } else {
        return {
          ...state,
          sortByDate: action.payload,
          items: [...state.items.sort(sortFunctionASC)],
        };
      }
    default:
      return state;
  }
};

export default mainReducer;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  mainReducer,
  composeEnhancer(applyMiddleware(thunk))
);
