import React, { PureComponent } from 'react';
import { Icon } from 'antd'
import './header.style.css';
import config from '../../../config/config'
import logo from '../../../static/logo.png'
import headerBg from '../../../static/headerBg.png'

const position = []
export default class Header extends PureComponent {
    
    render(){
        return (
            <div className="header">
                <div className="title"><img src={logo}/>{config.appName}</div>
                <div className="icon"><Icon type="user"/></div>
                <div className="motion">
                   
                </div>
            </div>
        )
    }
}