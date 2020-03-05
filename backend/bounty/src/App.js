import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component";
import PlantsMap from "./components/plants-map.component";
import CreateUser from "./components/create-user.component"; 


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={PlantsMap} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
