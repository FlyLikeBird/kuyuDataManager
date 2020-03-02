import React,{ Component } from 'react'
import { render } from 'react-dom'
import './style.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            hello:1
        }
    }

    render(){
        return (
            <div>
                <button onClick={()=>this.setState({hello:++this.state.hello})}>add</button>
                <span>{this.state.hello}</span>
                <span>hello world</span>
                <span>lala</span>
                <ul>
                    <li>a</li>
                    <li>b</li>
                </ul>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))

