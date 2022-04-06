import { call, put } from '@redux-saga/core/effects';
import axios from 'axios';
import Actions from '../actions';

async function fetchUnits() {
    try {
       const {data} = await axios.get('http://localhost:5000/units');
       return data;
    } catch(err) {
        console.log(err);
    }
}

export function* handleGetUnits() {
   const units = yield call(fetchUnits);
   yield put(Actions.unitActions.setUnits(units));
}