
import './App.css';
import Home from './screen/Home';
import Login from './screen/Login';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/login" element={<Login></Login>} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
