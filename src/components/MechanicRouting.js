import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route,Redirect } from 'react-router-dom';
import  ViewMechanicRequest  from '../pages/ViewMechanicRequest';
import ViewFeedback from '../pages/ViewFeedback';
import MechanicProfile from '../pages/MechanicProfile';
import Navbar from './Navbar';
import Logout from './Logout';


class MechanicRouting extends Component {
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
            <Navbar />
            <Switch>
              <Route path='/profile' component={MechanicProfile} />
              <Route path='/viewrequest' component={ViewMechanicRequest} />
              <Route path='/viewfeedback' component={ViewFeedback} />
              {/* <Route path='/logout' component={}/> */}
              <Route exact path="/logout">
                     <Logout/>
                 </Route>
            </Switch>
          </Router>
      
        )
    }
}

export default MechanicRouting
