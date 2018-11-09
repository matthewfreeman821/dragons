import React, { Component } from 'react';

class Root extends Component {
    render() {
        return(
            //ternary expression
            true ? <ComponentOne /> : <ComponentTwo />
        )
    }
};

export default Root;