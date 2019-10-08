import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import rootAction from '../../actions';

function* counterSaga() {
    yield takeEvery(rootAction.counterAction.UP_COUNT, upCountEffect);
}

function* upCountEffect(action) {
    console.log('effect up count');
    console.log('action', action);
}

export default counterSaga;
