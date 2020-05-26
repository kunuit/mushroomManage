import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  select,
  // select,
} from 'redux-saga/effects';

import * as farmerConstants from '../constants/farmers.constant';

import { getFarmer } from '../apis/farmer.api';
import { STATUS_CODE } from '../constants/index';

import {
  fetchListFarmer,
  fetchListFarmerFail,
  fetchListFarmerSuccess,
} from '../actions/farmer.action';

function* fetchListFarmerAction({ payload }) {
  const { params } = payload;
  const res = yield call(getFarmer, params);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    // dispatch action fetchListFarmerSuccess
    yield put(fetchListFarmerSuccess(data));
  } else {
    // dispatch action fetchListFarmerFail
    yield put(fetchListFarmerFail(data));
  }
}

function* rootSaga() {
  yield takeLatest(farmerConstants.FETCH_FARMERS, fetchListFarmerAction);
}

export default rootSaga;
