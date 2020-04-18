import {fork, call, take, put} from 'redux-saga/effects'
import { actionTypes } from '../actions/productActions'
import { actionTypes as IndexActions } from '../actions/indexActions'
import { get, post } from '../fetch/fetch'

const { PRODUCTS_FETCH, PRODUCTS_RESPONSE, RESET_FETCH } = actionTypes;

function* getProducts(){
    try{
        yield put({type:RESET_FETCH, isLoading:true});
        return yield call(get, '/product/getAllTvs');
    } catch(e){
        yield put({type:RESET_FETCH, isLoading:false});
    } 
}

function* getProductsFlow(){
    var action = yield take(PRODUCTS_FETCH);
    var res = yield call(getProducts);
    if (res && res.code === 1){
        res.data.pageNum = action.pageNum;
        yield put({type:PRODUCTS_RESPONSE, data:res.data});
        yield put({type:RESET_FETCH, isLoading:false});
    } else {
        console.log('server error');
    }
}

export default function* productSaga(){
    yield fork(getProductsFlow);
}