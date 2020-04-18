import { actionTypes } from '../actions/indexActions';
import { combineReducers } from 'redux'

import products from './products';
import menus from './menus'

const  initialState = {
    msg:{
        type:1,
        content:''
    },
    user:{

    }
};


export default combineReducers({
    products,
    menus
})