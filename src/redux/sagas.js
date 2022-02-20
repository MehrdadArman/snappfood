import { all, fork } from "redux-saga/effects";

import vendorsSagas from "./vendors/saga";

export default function* rootSaga() {
  yield all([fork(vendorsSagas)]);
}
