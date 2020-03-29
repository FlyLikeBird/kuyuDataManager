import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
const middlewares = [];
const win = window;
var storeEnhancers;
if(process.env.NODE_ENV==='production'){
    storeEnhancers = compose(
        applyMiddleware(...middlewares)
    );
}else{
    storeEnhancers = compose(
        applyMiddleware(...middlewares),
        (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
    );
}

export default ()=>{
    var store = createStore(rootReducer, storeEnhancers);
    return store;
}
/*
if(module.hot){
    module.hot.accept('./reducers',()=>{
        var newStore = storeCreator();
        return newStore;
    })
}
/*
export default ()=>{
    
    if(module.hot){
        module.hot.accept('./reducers',()=>{
            var nextReducer = require('./reducers/index.js').default;
            store.replaceReducer(nextReducer);
        })    
    }
    return store;
}
*/


