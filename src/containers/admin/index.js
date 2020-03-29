import React, { PureComponent } from 'react'
import axios from 'axios'
console.log('admin updated');
export default class Admin extends PureComponent {
    componentDidMount(){
        console.log('admin component mounted');
            
    }
    render(){
        return (
            <div>index page
                hello world
                
            </div>
        )
    }
}