import { call, takeEvery, put } from "redux-saga/effects";
import { createAction } from "redux-actions";
import storageService from "../services/storage-service";
import { LOCAL_STORAGE_REQUEST } from "../constants/action-types";

const defaultNextType = {
  pending: "REQUEST_PENDING",
  success: "REQUEST_SUCCESS",
  error: "REQUEST_ERROR"
};

function* requestData(action) {
  const nextType = action.payload.nextActionType || defaultNextType;
  try {
    yield put(
      createAction(
        nextType.pending,
        () => action,
        () => action.meta
      )()
    );

    if (action.payload.method === "get") {
      const data = yield call(storageService.get, action.payload.key);
      yield put(
        createAction(
          nextType.success,
          () => data,
          () => action.meta
        )(data)
      );
    } else if (action.payload.method === "set") {
      yield call(storageService.set, action.payload.key, action.payload.data);
      yield put(
        createAction(
          nextType.success,
          () => action.payload,
          () => action.meta
        )(action.payload)
      );
    }
  } catch (e) {
    yield put(
      createAction(
        nextType.error,
        () => e,

        () => action.meta
      )(e)
    );
  }
}

export default function* localStorageSaga() {
  yield takeEvery(LOCAL_STORAGE_REQUEST, requestData);
}
