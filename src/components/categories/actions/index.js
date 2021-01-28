import {
  LOCAL_STORAGE_REQUEST,
  CATEGORIES_FETCH_CATEGORIES,
  CATEGORIES_ADD_CATEGORY
} from "../../../constants/action-types";

export function fetchCategories() {
  return {
    type: LOCAL_STORAGE_REQUEST,
    payload: {
      key: "categories",
      method: "get",
      nextActionType: CATEGORIES_FETCH_CATEGORIES
    }
  };
}

export function addCategory(categories) {
  return {
    type: LOCAL_STORAGE_REQUEST,
    payload: {
      key: "categories",
      method: "set",
      data: categories,
      nextActionType: CATEGORIES_ADD_CATEGORY
    }
  };
}
