console.log('container updated');
import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//import { hot } from 'react-hot-loader/root'
import Admin from './admin'
import Login from './login'

import '../styles/global.css'

export default class App extends PureComponent {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/" component={Admin} />
                </Switch>
            </Router>
        )
    }
}
