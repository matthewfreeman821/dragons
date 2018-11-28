import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';
import fetchStates from '../reducers/fetchStates';

class Dragon extends Component {
    get DragonView() {
        const { dragon } = this.props;

        if (dragon.status === fetchStates.error) return <span>{dragon.message}</span>;
        
        return <DragonAvatar dragon={this.props.dragon} />;
    }

    render() {
        return (
            <div className="col-lg-3 dragon-information">
                <Button className="btn-primary" onClick={this.props.fetchDragon}>New Dragon</Button>
                <br />
                { this.DragonView }
            </div>
        );
    }
}

export default connect(
    ({ dragon }) => ({ dragon }),
    { fetchDragon }
)(Dragon);