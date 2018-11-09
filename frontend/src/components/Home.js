import React, { Component } from 'react';
import Generation from './Generation';
import Dragon from './Dragon';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <h2 className="col-md-3">Dragon Stack</h2>
                <Generation />
                <Dragon />
            </div>
        );
    }
}

export default Home;