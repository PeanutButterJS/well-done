import {
  LOCAL_STORAGE_REQUEST,
  APP_FETCH_CATEGORIES,
  APP_ADD_CATEGORY,
  APP_SET_CURRENT_CATEGORY
} from "./constants/action-types";

export function fetchCategories() {
  return {
    type: LOCAL_STORAGE_REQUEST,
    payload: {
      key: "categories",
      method: "get",
      nextActionType: APP_FETCH_CATEGORIES
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
      nextActionType: APP_ADD_CATEGORY
    }
  };
}

export function setCurrentCategory(category) {
  return {
    type: APP_SET_CURRENT_CATEGORY,
    payload: {
      category
    }
  };
}
