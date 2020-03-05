import React, { Component } from "react";
import {Link} from "react-router-dom";

class Login extends Component{
    constructor() {
        super();
        this.state = { 
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        // get user input from state to send to db
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(userData)
    };
    render(){
        const { errors } = this.state;

        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            />
                    </div>
                    <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        );

    }

}
export default Login;