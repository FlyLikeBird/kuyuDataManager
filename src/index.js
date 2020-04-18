import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import { hot } from 'react-hot-loader/root';
import App from './containers'
import createStore from './createStore'

var nextApp ;
const store = createStore();

const render = (Component, store)=>{
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    )
}

render(App, store);

if(module.hot){
    module.hot.accept('./containers',()=>{
        nextApp = require('./containers/index.js').default;
        render(nextApp, store);
        
    });

    module.hot.accept('./createStore',()=>{
        var nextCreateStore = require('./createStore').default;
        var nextStore = nextCreateStore();
        render(nextApp || App, nextStore);
    })
}




