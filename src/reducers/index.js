import { actionTypes } from '../actions/indexActions';

const  initialState = {
    num:20,
    age:30,
    address:'gz',
    job:'hello'
};


console.log('reducer updated...');
export default (state=initialState, action)=>{
    console.log(state);
    console.log(action);
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