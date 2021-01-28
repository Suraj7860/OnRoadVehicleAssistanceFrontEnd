import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import image1 from '../images/orba.png';
import '../style/navbar-style.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

 function NavbarData() {
    return (
        <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Home</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Our Service</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Contact Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">About Us</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
        <ReactBootStrap.NavDropdown title="Login"  id="collasible-nav-dropdown" >
        <ReactBootStrap.Dropdown.Item>
           <Link className="nav-link" to="/login"/>Admin Login 
        </ReactBootStrap.Dropdown.Item>
        <ReactBootStrap.Dropdown.Item href="#/action-2">Mechanic</ReactBootStrap.Dropdown.Item>
        <ReactBootStrap.Dropdown.Item href="#/action-3">User</ReactBootStrap.Dropdown.Item>
       </ReactBootStrap.NavDropdown>
       <ReactBootStrap.NavDropdown title="Register" id="collasible-nav-dropdown">
       <ReactBootStrap.Dropdown.Item href="#/action-1">User</ReactBootStrap.Dropdown.Item>
        <ReactBootStrap.Dropdown.Item href="#/action-2">Mechanic</ReactBootStrap.Dropdown.Item>
       </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse> 
    </ReactBootStrap.Navbar>
    <img src={image1} alt="Logo"  height='100%' width='100%' />;

                
            
                
           
            </div>

    )
}

export default NavbarData