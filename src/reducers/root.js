import { combineReducers } from "redux";
import { categories } from "./categories";

export const root = combineReducers({
  categories
});

export default root;
