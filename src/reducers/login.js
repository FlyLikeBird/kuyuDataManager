import { actionTypes } from '../actions/loginActions';

const initialState = {
    username:'',
    pwd:'',
    confirmPwd:''
};

export default (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD:
            return {
                ...state,
                num:++state.num
            }
        case 'open':
            return {
                ...state,
                visible:true
            }
        case 'close':
            return {
                ...state,
                visible:false
            }
        default :
            return state;
    }
}