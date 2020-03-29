import React, { PureComponent } from 'react'
import { Form, Tabs } from 'antd'

const { TabPane } = Tabs;

class LoginForm extends PureComponent {
    render(){
        console.log('login');
        return (
            <div>
                login form
            </div>
        )
    }
}

export default LoginForm = Form.create()(LoginForm);

