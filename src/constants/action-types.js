const localStorageRequestActions = (name) => ({
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  pending: `${name}_PENDING`
});

export const LOCAL_STORAGE_REQUEST = "LOCAL_STORAGE_REQUEST";

export const APP_FETCH_CATEGORIES = localStorageRequestActions(
  "APP_FETCH_CATEGORIES"
);
export const APP_ADD_CATEGORY = localStorageRequestActions("APP_ADD_CATEGORY");
export const APP_SET_CURRENT_CATEGORY = "APP_SET_CURRENT_CATEGORY";
