import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import image1 from '../images/orba.png';
import '../style/navbar-style.css';
import ALogin from '../components/AdminLogin';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import NavbarData from './NavbarData';
import AdminLogin from '../components/AdminLogin';
import Sidebar from './Sidebar';


class Home extends Component {
    render() {
        return (  
          <Router>
            
              <NavbarData/>    
               <Route path="/login" component={AdminLogin}   />
                     <Route path="/side" component={Sidebar}  />
            </Router>
        )
    }
}

export default Home