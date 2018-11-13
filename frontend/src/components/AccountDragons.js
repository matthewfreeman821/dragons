import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountDragons } from '../actions/accountDragons';

class AccountDragons extends Component {
    
}

export default connect(
    ({ accountDragons }) => ({ accountDragons }),
    { fetchAccountDragons }
)(AccountDragons);