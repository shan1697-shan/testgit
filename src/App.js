import logo from './logo.svg';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup, FormControl, Form, ControlLabel, FormLabel } from "react-bootstrap";
import Header from "./Components/header"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Conversations from './Components/Conversations';
import Bin from './Components/Bin';
import Home from './Components/Home';
// import {  Navbar, Tab, Container, Nav, NavDropdown } from "react-bootstrap";
import React from 'react';
import { Switch } from '@material-ui/core';
import Profile from './Components/profile';

function App() {
  return (
    <>
    <Home/>
    {/* <Profile/> */}
    {/* <Header /> */}
    {/* <Bin /> */}
    <Conversations />
    
    
    <Router>
          <Routes>
              <Route path="/" exact component={Conversations}>
              </Route>
              <Route path="/bin" exact component={Bin}>
              </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
