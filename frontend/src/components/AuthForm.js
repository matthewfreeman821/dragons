import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class AuthForm extends Component {
    state = { username: '', password: '' };

    //Can be abstracted to one function by taking an input of type to determine what piece of state needs to be updated, not necessary at this time
    updateUsername = event => {
        this.setState({ username: event.target.value })
    }

    updatePassword = event => {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Dragon Stack</h2>
                <FormGroup>
                    <FormControl 
                        type='text'
                        value={this.state.username}
                        placeholder='username'
                        onChange={this.updateUsername}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl 
                        type='password'
                        value={this.state.password}
                        placeholder='password'
                        onChange={this.updatePassword}
                    />
                </FormGroup>
                <div>
                    <Button>Log In</Button>
                    <span> or </span>
                    <Button>Sign Up</Button>
                </div>
            </div>
        );
    }
}

export default AuthForm;