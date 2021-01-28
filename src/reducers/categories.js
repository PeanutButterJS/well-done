import {
  APP_FETCH_CATEGORIES,
  APP_ADD_CATEGORY,
  APP_SET_CURRENT_CATEGORY
} from "../constants/action-types";
/* import storageService from "../services/storage-service"; */

const initialState = {
  categories: [],
  currentCategory: null
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case APP_FETCH_CATEGORIES.success: {
      return {
        ...state,
        categories: [...action.payload]
      };
    }
    case APP_ADD_CATEGORY.success: {
      return {
        ...state,
        categories: [...action.payload.data],
        currentCategory:
          !state.currentCategory || !action.payload.data
            ? null
            : action.payload.data.filter(
                (cat) => cat.id === state.currentCategory.id
              )[0]
      };
    }
    case APP_SET_CURRENT_CATEGORY: {
      return {
        ...state,
        currentCategory: action.payload.category
      };
    }

    default:
      return state;
  }
};
