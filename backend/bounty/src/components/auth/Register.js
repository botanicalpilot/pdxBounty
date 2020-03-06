import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

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

    componentDidMount() {
        // if logged in and user navigates to Register page, redirect to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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
        this.props.registerUser(newUser, this.props.history);
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
                            className={classnames("", {
                                invalid: errors.username
                            })}
                            />
                            <span>{errors.username}</span>
                    </div>
                    <div className="form-group">
                        <label>email: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                            />
                            <span>{errors.email}</span>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                            />
                            <span>{errors.password}</span>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                            />
                            <span>{errors.password2}</span>
                    </div>
                    <div className="form-group">
                            <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        );

    }

}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register));