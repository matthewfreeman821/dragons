import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Generation from './Generation';
import Dragon from './Dragon';
import AccountInfo from './AccountInfo';
// import AccountDragons from './AccountDragons';
import { logout } from '../actions/account';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <Button onClick={this.props.logout} className='logout-button' >
                Log Out
                </Button>
                <h2 className="col-md-3">Dragon Stack</h2>
                <Generation />
                <Dragon />
                <hr />
                <AccountInfo />
                <div className="container">
                    <Link to='/account-dragons'>Account Dragons</Link>
                    <br />
                    <Link to='/public-dragons'>Public Dragons</Link>
                </div>
            </div>
        );
    }
}

export default connect(null, { logout })(Home);