import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route , Redirect} from "react-router-dom";


export class Logout extends Component {

    constructor(props) {
        super(props)
    
        localStorage.removeItem('token')
        localStorage.removeItem('role')

       
    }
    componentDidMount(){
        window.location.href = 'http://localhost:3000/';

    }

    // logout = () => {

    //     // setTimeout("location.reload(true);", time);
    //     window.location.href = 'http://localhost:3000/';
    //     // window.location.reload(false);

    // }
    
    render() {
        return (
            <div>
                <h1>You have been logged out</h1>
                {/* <input type="button" value = "Refresh" onclick="history.go(0)" /> */}
                {/* <button onClick={this.logout.bind(this)}>Log In Again</button> */}
            </div>
        )
    }
}

export default Logout

