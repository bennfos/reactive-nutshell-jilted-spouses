import React, { Component } from 'react';
import UserDataManager from './UserDataManager';
import RegisterModal from './RegisterModal';
import './Login.css';

class Login extends Component {
    state = {
        email: "",
        password: "",
        users: []
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    componentDidMount() {
        // getAll users and hand on 
        UserDataManager.getAllUsers()
            .then(users => {
                this.setState({
                    users: users
                })
            })
    }

    render() {
        console.log(this.state.users);
        return (
            <React.Fragment>
                <form onSubmit={this.handleLogin}>
                    <fieldset>
                        <h3>Please Log In Or Register!</h3>
                        <div className="loginForm">
                            <input onChange={this.handlefieldChange} type="email"
                                id="email"
                                placeholder="Email address"
                                required
                                autoFocus=""
                            />
                            <input onChange={this.handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required 
                            />
                        </div>
                        <button type="submit">Sign In</button>
                        <p>Or</p>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
}

export default Login;