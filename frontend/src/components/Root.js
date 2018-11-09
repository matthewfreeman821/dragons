import React, { Component } from 'react';
import Home from './Home';
import AuthForm from './AuthForm';

class Root extends Component {
    render() {
        return(
            //ternary expression
            false ? <Home /> : <AuthForm />
        )
    }
};

export default Root;