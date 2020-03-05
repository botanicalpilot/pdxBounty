import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// all components start like this...
export default class Navbar extends Component {
    render() {
        return (
            // have to use className because of JSX
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* instead of li we use link */}
                <Link to="/" className="navbar-brand">PDXBounty</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        {/* <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Plant Entry</Link>
                        </li> */}
                        <li className="navbar-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}