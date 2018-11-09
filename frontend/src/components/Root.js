import React, { Component } from 'react';
import Home from './Home';

class Root extends Component {
    render() {
        return(
            //ternary expression
            true ? <Home /> : <ComponentTwo />
        )
    }
};

export default Root;