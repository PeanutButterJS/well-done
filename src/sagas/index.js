import { fork } from "redux-saga/effects";
import localStorageSaga from "./local-storage-saga";

export default function* rootSaga() {
  yield fork(localStorageSaga);
}
