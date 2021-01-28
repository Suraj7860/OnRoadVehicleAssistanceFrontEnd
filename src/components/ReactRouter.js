import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';

export function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                             */}
                                <ReactBootStrap.NavDropdown title="Login"  id="collasible-nav-dropdown" >
                                <ReactBootStrap.Dropdown.Item>
                                   <Link className="nav-link" to="/login"/>Admin Login 
                                  </ReactBootStrap.Dropdown.Item>
                                <ReactBootStrap.Dropdown.Item href="#/action-2">Mechanic</ReactBootStrap.Dropdown.Item>
                      <ReactBootStrap.Dropdown.Item href="#/action-3">User</ReactBootStrap.Dropdown.Item>
                             </ReactBootStrap.NavDropdown>

                            </ul>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
                <Switch>
                    
                    {/* <Route exact path="/">
                        <Home></Home>
                    </Route> */}
                    <Route exact path="/login">
                        <AdminLogin></AdminLogin>
                    </Route>

                    {/* <Route path="/searchByTraineeId" component={SearchByTraineeId}/> */}
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
