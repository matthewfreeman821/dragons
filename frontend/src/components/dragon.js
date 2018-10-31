import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';

class Dragon extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <DragonAvatar dragon={this.props.dragon} />
                        <Button className="btn-primary"onClick={this.props.fetchDragon}>New Dragon</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    ({ dragon }) => ({ dragon }),
    { fetchDragon }
)(Dragon);