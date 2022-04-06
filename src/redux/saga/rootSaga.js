import { takeLatest } from 'redux-saga/effects';
import ActionTypes from "../actionTypes";
import { handleGetUnits } from './unitSaga';

export function* rootSaga() {
    yield takeLatest(ActionTypes.unit.GET_UNITS, handleGetUnits);
}