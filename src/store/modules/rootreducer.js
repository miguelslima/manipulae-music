import { combineReducers } from "redux";
import album from "./album/reducer";
import search from "./search/reducer";

export default combineReducers({
  album,
  search,
});
