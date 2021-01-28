import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.id = React.createRef();
        this.password = React.createRef();
        this.state={
          message:"HOME_PAGE"
        }
    }

    componentDidMount() {
      this.props.clearState()
  }

  // componentDidUpdate() {
  //       let check = this.props.returnedMessage.split(' ')
  //       if (check[0] === 'Login') {
  //           setTimeout(() => {
  //             this.props.history.push('/Home')
  //           }, 2000)
  //       }
  //   }
  
  


    login(e) {
        let credentials = {
            id: this.id.current.value,
            password: this.password.current.value,
        }
        this.props.onLogin(credentials)
        e.preventDefault()
        
    }
    
    render() {
      if(this.state.message==="HOME_PAGE"){
        return (
            <div className="container mt-5">
            <div className="row">
              <div className="col">
                <form>
                    <div className="col-sm-5 ">
                    <label htmlFor="first-name" className="col-sm-4 col-form-label" >
                      Username
                    </label>
                    <div className="col-sm-5 ">
                      <input
                        type="text"
                        className="form-control-sm"
                        ref={this.id}
                        name="Id"
                        placeholder="Enter the username" 
                        required
                      />
                    </div>
                  </div>
                    <div className="col-sm-5 ">
                    <label htmlFor="last-name" className="col-sm-4 col-form-label">
                      Password
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control-sm"
                        ref={this.password}
                        name="name"
                        placeholder="Enter the Password"
                        required/>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="col">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={this.login.bind(this)}>
                        Login
                      </button>
                    </div>
                    </div>
                    </form>
              </div>
            </div>
            <br></br>
            <br></br>
            
            <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>
            
            <div>
              {
                this.props.returnedMessage==="Login Sucessful"?this.setState({message:"Sidebar"}):<div></div>
              }
            </div>

            </div>  
        )
        }
        else if(this.state.message==="Sidebar"){
          return (
          
              <Sidebar />
                
            
          )
        }    
    }
    
}


const mapStateToProps = (state) => {
  //alert("admin: "+state.returnedMessage)
    return {
        returnedMessage: state.returnedMessage

    }
    

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (credentials) => {
            //console.log(credentials)
            // dispatch(actionCreators.onLoginVerify(credentials))
        },
        // onUpdateTrainee: (id, newTraineeObject) => {
        //     dispatch(actionCreators.updateTrainee(id, newTraineeObject))
        // },
        clearState: () => {
            dispatch(actionCreators.clearState())

        }

    }

}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminLogin))
