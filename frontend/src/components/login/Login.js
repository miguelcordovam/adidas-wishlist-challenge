import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom'
import SocialLogin from './SocialLogin';

class Login extends Component {
    
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/products",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to WishList</h1>
                    <SocialLogin />
                </div>
            </div>
        );
    }
}

export default Login;