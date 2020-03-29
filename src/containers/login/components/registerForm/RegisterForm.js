import React, { PureComponent } from 'react'
import { Form, Tabs } from 'antd'

const { TabPane } = Tabs;

class RegisterForm extends PureComponent {
    render(){
        console.log('Register');
        return (
            <div>
                Register form
            </div>
        )
    }
}

export default RegisterForm = Form.create()(RegisterForm);

