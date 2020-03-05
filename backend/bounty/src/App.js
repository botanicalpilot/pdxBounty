import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar.component";
import PlantsMap from "./components/plants-map.component";
import Register from "./components/auth/Register"; 
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// check for token to keep user logged in
if (localStorage.jwtToken) {
  // set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // decode token and get user info and exp
  const decoded = jwt_decode(token);

  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000; 
    if(decoded.exp < currentTime) {
      // logout user
      store.dispatch(logoutUser());

      // redirect to login
      window.location.href = "./login";
    }
}


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <br/>
          <Route path="/" exact component={PlantsMap} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
