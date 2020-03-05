import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar.component";
import PlantsMap from "./components/plants-map.component";
import Register from "./components/auth/Register"; 
import Login from "./components/auth/Login";


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
        </Router>
      </Provider>
    );
  }
}

export default App;
