import {fork, call} from 'redux-saga/effects'
import productSaga from './productSaga';

export default function* rootSaga() {
    yield fork(productSaga);
}
