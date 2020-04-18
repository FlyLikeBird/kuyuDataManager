import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const win = window;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

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
    sagaMiddleware.run(rootSaga);
    return store;
}

/*
if(module.hot){
    module.hot.accept('./reducers',()=>{
        var newStore = storeCreator();
        return newStore;
    })
}

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


