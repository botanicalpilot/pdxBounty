import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component";
import PlantsList from "./components/plants-list.component";
import EditPlant from "./components/edit-plant.component";
import CreatePlant from "./components/create-plant.component";
import CreateUser from "./components/create-user.component"; 


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={PlantsList} />
      <Route path="/edit/:id" exact component={EditPlant} />
      <Route path="/create" exact component={CreatePlant} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
