console.log('login updated');
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Form, Tabs } from 'antd'

import LoginForm from './components/loginForm/LoginForm'
import RegisterForm from './components/registerForm/RegisterForm'
import style from './loginContainer.style.css'

const { TabPane } = Tabs;

class LoginContainer extends PureComponent {
    render(){
        return (
            <div className={style.container}>
                <Tabs>
                    <TabPane tab="登录" key="login">
                        <LoginForm />
                    </TabPane>
                    <TabPane tab="注册" key="register">
                        <RegisterForm />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
}

export default LoginContainer = connect()(LoginContainer);