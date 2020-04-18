import React from 'react';
import { Icon } from 'antd';
import { actionTypes } from '../actions/menuActions';

const initialState = {
    data:[
        {
            key:'overview',
            title:<span><Icon type="eye"/><span>运营概况</span></span>,
            subMenu:[
                {path:'hello', text:''}
            ]
        },
        {
            key:'order',
            title:<span><Icon type="eye"/><span>订单管理</span></span>,
            subMenu:[
                { path:'orderView', text:'订单概况' },
                { path:'orderUser', text:'交易用户' },
                { path:'orderSum', text:'交易金额' }
            ]
        },
        {
            key:'product',
            title:<span><Icon type="eye"/><span>产品分析</span></span>,
            subMenu:[
                { path:'productManager', text:'产品管理' },
                { path:'productCompare', text:'竞品分析' }
            ]
        },
        {
            key:'user',
            title:<span><Icon type="eye"/><span>用户分析</span></span>,
            subMenu:[
                { path:'newUser', text:'新增用户' },
                { path:'activeUser', text:'活跃用户' },
                { path:'loseUser', text:'流失用户' },
                { path:'userInfo', text:'用户画像' }
            ]
        }
    ],
    currentMenu:'productManager',
    collapsed:false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.COLLAPSE_MENU:
            return { ...state, collapsed:!state.collapsed}
        case actionTypes.CHANGE_CURRENT_MENU:
            return {...state, currentMenu:action.location}
        default:
            return state;
    }
}