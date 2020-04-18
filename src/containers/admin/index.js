import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Icon } from 'antd';
import Header from '../../components/Header';
import Sidebar from '../Sidebar';
import style from './admin.style.css'

import AdminIndex from '../AdminIndex';
import ProductManager from '../ProductManager';


export default class Admin extends PureComponent {
    
    render(){
        return (
            <div className={style.container}>
                <Header />
                <div className={style['main-content']}>                    
                    <Sidebar location={this.props.location}/>
                    
                    <div className={style.content}>
                        <Switch>
                            <Route path="/productManager" component={ProductManager}/>
                            <Route path="/productCompare" component={ProductManager} />
                            <Route path="/" component={AdminIndex} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

