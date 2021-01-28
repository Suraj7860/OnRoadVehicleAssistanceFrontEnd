import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route,Redirect } from 'react-router-dom';
import Givefeedback from '../pages/GiveFeedback';
import Profile from '../pages/Profile';
import SearchMechanics from '../pages/SearchMechanic';
import UserNavbar from './userNavbar';
import Logout from './Logout';

class UserRouting extends Component {
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
            <>
       <Router>
    <UserNavbar/>
      <Switch>
      
        <Route path='/profile' exact component={Profile} />
        <Route path='/mechanics' component={SearchMechanics} />
        <Route path='/giveFeedback' component={Givefeedback} />
        <Route exact path="/logout">
                     <Logout/>
                 </Route>
      </Switch>

    </Router>
        </>
        
        )
    }
}

export default UserRouting
