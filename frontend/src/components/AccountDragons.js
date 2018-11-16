import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAccountDragons } from '../actions/accountDragons';
import AccountDragonRow from './AccountDragonRow';

class AccountDragons extends Component {
    componentDidMount() {
        this.props.fetchAccountDragons();
    }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <h3>Account Dragons</h3>
                    {
                        this.props.accountDragons.dragons.map(dragon => {
                            return(
                                <div key ={dragon.dragonId}>
                                    <AccountDragonRow dragon={dragon} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    ({ accountDragons }) => ({ accountDragons }),
    { fetchAccountDragons }
)(AccountDragons);