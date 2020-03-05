import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "", 
            email: "",
            password: "",
            password2:"",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        // get user input from state to send to db
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser)
    };
    render(){
        const { errors } = this.state;

        return (
            <div>
                <h3>Register</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.username}
                            error={errors.username}
                            id="username"
                            type="text"
                            />
                    </div>
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
                        <label>Confirm Password: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            />
                    </div>
                    <div className="form-group">
                            <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        );

    }

}
export default Register;