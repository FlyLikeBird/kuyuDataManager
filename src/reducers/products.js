import { actionTypes } from '../actions/productActions';

const initialState = {
    data:[],
    columns:[
        {
            title:'型号',
            dataIndex:'model',
            key:'model'
        },
        {
            title:'描述',
            dataIndex:'description',
            key:'description'
        },
        {
            title:'尺寸',
            dataIndex:'size',
            key:'size'
        },
        {
            title:'价格',
            dataIndex:'price',
            key:'price'
        }
    ],
    total:0,
    pageNum:1,
    isLoading:false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.PRODUCTS_RESPONSE:
            var { products, total, pageNum } = action.data;
            return {...state, data:products, total, pageNum}
        case actionTypes.RESET_FETCH:
            return { ...state, isLoading:action.isLoading}
        default:
            return state;
    }
}