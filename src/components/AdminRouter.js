import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route,Redirect } from 'react-router-dom';
import ViewRequest from '../pages/ViewRequest';
import ViewUsers from '../pages/ViewUsers';
import ViewMechanic from '../pages/ViewMechanic';
import ViewFeedback from '../pages/ViewFeedback';
 import Sidebar from './Sidebar';
import SearchById from '../pages/SearchById';
import MainLogin from './MainLogin';
import Logout from './Logout';

export class AdminRouter extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token');
    
        console.log("token is",token);
        let loggedIn = true

        if(token === null)
        {
            loggedIn = false
        }

        this.state = {
             loggedIn
        }
    }

    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/" />
        }
        
        console.log(this.state.loggedIn);
        return (
        <Router>
            
            <Sidebar/>
            <Switch>
           <Route exact path="/viewUser">
               <ViewUsers  />
           </Route>
           <Route exact path="/viewRequest">
               <ViewRequest />
           </Route>
           <Route exact path="/viewMechanic">
               <ViewMechanic />
           </Route>
           <Route exact path="/viewFeedback">
               <SearchById />
           </Route>
           <Route exact path="/logout">
               <Logout/>
           </Route>
           </Switch>
       </Router>
        
        )
    }
}

export default AdminRouter
