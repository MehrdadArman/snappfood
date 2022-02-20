import { call, takeEvery, all, fork, put } from "redux-saga/effects";
import { toast } from "react-toastify";

//**  action types
import * as actionTypes from "../actionTypes";

//** actions
import * as actions from "../vendors/actions";

//** services
import { getVendorsListAsync } from "../../services/vendorsServices";

// ** GET  car types
function* getVendorsList({ payload }) {
  try {
    const response = yield call(getVendorsListAsync, payload.params);
    const data = response.data;

    if (response.status === 200) {
      yield put(actions.getVendorsListSuccess(data.data.finalResult));
    } else {
      toast.error(response.data.message);
      yield put(actions.getVendorsListFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

// ******************watch*****************

// watch get car types
export function* watchGetVendorsList() {
  yield takeEvery(actionTypes.GET_VENDORS_LIST, getVendorsList);
}

// ** Fork
export default function* rootSaga() {
  yield all([fork(watchGetVendorsList)]);
}
