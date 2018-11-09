import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import Generation from './Generation';
import Dragon from './Dragon';
import { logout } from '../actions/account';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <Button onClick={this.props.logout} className='logout-button' >Log Out</Button>
                <h2 className="col-md-3">Dragon Stack</h2>
                <Generation />
                <Dragon />
            </div>
        );
    }
}

export default connect(null, { logout })(Home);