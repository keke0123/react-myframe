import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import rootAction from '../actions';
import counterSaga from './counter';

function* rootEffect() {
    yield all([
        counterSaga(),
    ])
}

export default rootEffect;
