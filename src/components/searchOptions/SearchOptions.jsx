import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TYPE, SORT_BY_DATE } from "../../actions";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./searchOptions.scss";

const SearchOptions = ({ type, gifPerPage, rating, offset }) => {
  const sortByDate = useSelector((state) => state.sortByDate);
  const query = useSelector((state) => state.query);

  const dispatch = useDispatch();

  const setValue = (selector, value) => {
    switch (selector) {
      case "type":
        dispatch({ type: SET_TYPE, payload: value });
        break;
      case "sortByDate":
        return dispatch({ type: SORT_BY_DATE, payload: value });
      default:
        return null;
    }
  };
  return (
    <div
      className="searchOptions__container"
      data-testid="searchOptions__container"
    >
      <FormGroup aria-label="position" row>
        <FormControlLabel
          data-testid="switch__gifs"
          control={
            <Switch
              checked={type === "gifs"}
              onChange={() => {
                type === "gifs"
                  ? setValue("type", "stickers")
                  : setValue("type", "gifs");
              }}
              color="primary"
              name="gifs"
            />
          }
          label="gifs"
        />
        <FormControlLabel
          control={
            <Switch
              checked={type === "stickers"}
              onChange={() => {
                type === "gifs"
                  ? setValue("type", "stickers")
                  : setValue("type", "gifs");
              }}
              color="primary"
              name="stickers"
            />
          }
          label="stickers"
        />
        <FormControlLabel
          control={
            <Switch
              checked={sortByDate}
              onChange={() => setValue("sortByDate", !sortByDate)}
              color="primary"
              name="sortByDate"
            />
          }
          label="Sort by date"
        />
      </FormGroup>
    </div>
  );
};

export default SearchOptions;
