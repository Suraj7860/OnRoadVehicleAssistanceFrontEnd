import React, { Component } from 'react'
import "../style/userfile.css";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/useractions'
import MainLogin from './MainLogin'


const initialState = {
  nameError: "",
  phoneNoError:"",
  emailError: "",
  passwordError: ""
  

};
class UserRegister extends Component {
  state=initialState;
  constructor(props){
    super(props);
    this.userName=React.createRef();
    this.userPassword=React.createRef();
    this.userPhoneNumber=React.createRef();
    this.userEmailId=React.createRef();
    
  }
  componentDidMount() {
    this.props.clearState()
}
/***************** Validation****************** */

handleValidate = event => {
   //event.preventDefault();
   const isValid = this.validate();
   if (isValid) {
     console.log(this.state);
     // clear form
     this.setState(initialState);
   }
 };
 handleChange = event => {
   //event.preventDefault();
   const isCheckbox = event.target.type === "checkbox";
   this.setState({
     [event.target.name]: isCheckbox
       ? event.target.checked
       : event.target.value
   });
 };
 validate = () => {
   let nameError = "";
   let phoneNoError = "";
   let passwordError = "";
   let emailError = "";
 
   if (!this.userName.current.value) {
     nameError = "Name cannot be blank";
   }
   if (typeof (this.userPhoneNumber.current.value)!=="undefined") {
     var pattern = new RegExp(/^[0-9\b]+$/);
   if (!pattern.test(this.userPhoneNumber.current.value)) {
     phoneNoError = "Please enter only number.";
   }else if((this.userPhoneNumber.current.value).length != 10){
     phoneNoError = "Phone Number Must be of 10";
   }
   }
   if (typeof (this.userPassword.current.value)!=="undefined") {
     if((this.userPassword.current.value).length > 8 || (this.userPassword.current.value).length < 5){
       passwordError = "Password Must be in range of 5 to 8";
     }
   }
   if ( typeof (this.userEmailId.current.value) !=="undefined") {
     var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
     if (!pattern.test(this.userEmailId.current.value)) {
     emailError = "Invalid email";
     }
   }
 
   if (emailError || phoneNoError|| passwordError||  nameError) {
     this.setState({ emailError, nameError,phoneNoError,passwordError});
     return false;
   }
 
   return true;
 };

/************************************ */
registerUser=(e)=>
{
  this.handleValidate();
  let user={
    userName:this.userName.current.value,
    userPassword:this.userPassword.current.value,
    userEmailId:this.userEmailId.current.value,
    userPhoneNumber:this.userPhoneNumber.current.value,
  }
 //alert("on register");
  this.props.onRegister(user); 
  e.preventDefault();
}
    render() {
        return (
          <div>
          <h1>REGISTER</h1>
            <div className="col-md-5 col-md-offset-3" id="Body">
                 <form className="form" > 
                  <div className="mb-3 row">
                    <div className="col-sm-5 ">
                    <input
                        type="text"
                        id="12"
                        className="form-control form-control-sm"
                        ref={this.userName}
                        name="userName"
                        placeholder="Name"
                      /><div style={{ fontSize: 12, color: "red" }}>
                      {this.state.nameError}
                    </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        ref={this.userPassword}
                        name="userPassword"
                        placeholder=" Password"
                        /><div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.userPhoneNumber}
                        name="userPhoneNumber"
                        placeholder="Phone Number"
                        
                      /><div style={{ fontSize: 12, color: "red" }}>
                      {this.state.phoneNoError}
                    </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        ref={this.userEmailId}
                        name="userEmailId"
                        placeholder=" Email id"
                        /><div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-5">
                      <button className="btn btn-primary btn-sm" onClick={this.registerUser.bind(this)}> Sign up
                      </button>
                      </div>
                    </div>
                    </form>
            
            <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onRegister: (user) => {
          dispatch(actionCreators.register(user))
          //alert("to action");
      },
      clearState: () => {
        dispatch(actionCreators.clearState())

    }

}

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserRegister))