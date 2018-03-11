import React, {Component} from 'react'
import Headroom from 'react-headroom'
import logo from '../../img/logo.png'
export default class Header extends Component {
    render() {
        return (
            <div>
                <Headroom
                    style={{
                        boxShadow: '1px 1px 1px rgba(0,0,0,0.25)'
                    }}>
                    <div className="nav-container">
                        <img onClick={this.goHome} width="50px" src={logo} alt="header logo click to go home"/>
                        <h1>The Campbell Photo Repository</h1>
                    </div>
                </Headroom>
            </div>
          )
        }

    goHome() {
        window.location = '/'
    }
}
