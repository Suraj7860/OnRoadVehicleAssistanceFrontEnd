import React, { Component } from 'react'
import "../style/file1.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/mactions'

const initialState = {
  nameError: "",
  phoneNoError: "",
  serviceTpeError: "",
  emailError: "",
  passwordError: "",
  locationError: ""

};
class MechanicRegister extends Component {
  state=initialState;
  constructor(props){
    super(props);
    this.mechanicName=React.createRef();
    this.mechanicPhoneNumber=React.createRef();
    this.mechanicServiceType=React.createRef();
    this.mechanicEmailId=React.createRef();
    this.mechanicPassword=React.createRef();
    this.location=React.createRef();
  }
  
  handleValidate = event => {
    // event.preventDefault();
     const isValid = this.validate();
     if (isValid) {
       console.log(this.state);
       // clear form
       this.setState(initialState);
     }
   };
   handleChange = event => {
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
    let serviceTpeError = "";
    let passwordError = "";
    let emailError = "";
    let locationError = "";
  
    if (!this.mechanicName.current.value) {
      nameError = "Name cannot be blank";
    }
    if (typeof (this.mechanicPhoneNumber.current.value)!=="undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(this.mechanicPhoneNumber.current.value)) {
      phoneNoError = "Please enter only number.";
    }else if((this.mechanicPhoneNumber.current.value).length != 10){
      phoneNoError = "Phone Number Must be of 10";
    }
    }
    if (!this.mechanicServiceType.current.value) {
      serviceTpeError = "Service Type cannot be blank";
    }
    if (typeof (this.mechanicPassword.current.value)!=="undefined") {
      if((this.mechanicPassword.current.value).length > 8 || (this.mechanicPassword.current.value).length < 5){
        passwordError = "Password Must be in range of 5 to 8";
      }
    }
    if (!this.location.current.value) {
      locationError = "Location cannot be blank";
    }
    if ( typeof (this.mechanicEmailId.current.value) !=="undefined") {
      var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (!pattern.test(this.mechanicEmailId.current.value)) {
      emailError = "Invalid email";
      }
      }
      if (!this.mechanicEmailId.current.value) {
        emailError = "email cannot be blank";
      }
   
    if (emailError || phoneNoError|| serviceTpeError|| passwordError|| locationError|| nameError) {
      this.setState({ emailError, nameError,phoneNoError,serviceTpeError,passwordError,locationError});
      return false;
    }
  
    return true;
  };
  


 

  registerMechanic=(e)=>
  {
    this.handleValidate();
    let mechanic={
      mechanicName:this.mechanicName.current.value,
      mechanicPhoneNumber:this.mechanicPhoneNumber.current.value,
      mechanicServiceType:this.mechanicServiceType.current.value,
      mechanicEmailId:this.mechanicEmailId.current.value,
      mechanicPassword:this.mechanicPassword.current.value,
      location:this.location.current.value
    }
    // alert("on register");
    this.props.onRegister(mechanic);
    e.preventDefault();
    //alert(mechanic);
  
  }
    render() {
        return (
          <div>
          <h1>REGISTER</h1>
            <div className="col-md-5 col-md-offset-3" id="Body"  >
                <form className="form" /*method="post"*/ >
                  <div className="mb-3 row">
                    <div className="col-sm-5 ">
                    <input
                        type="text"
                        id="12"
                        className="form-control form-control-sm"
                        ref={this.mechanicName}
                        name="mechanicName"
                        placeholder="Name"
                        required
                      /><div style={{ fontSize: 12, color: "red" }}>
                      {this.state.nameError}
                    </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.mechanicPhoneNumber}
                        name="mechanicPhoneNumber"
                        placeholder="Phone Number"
                        required
                      /><div style={{ fontSize: 12, color: "red" }}>
                      {this.state.phoneNoError}
                    </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.mechanicServiceType}
                        name="mechanicServiceType"
                        placeholder=" Service Type"
                        required
                      /><div style={{ fontSize: 12, color: "red" }}>
                      {this.state.serviceTpeError}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        ref={this.mechanicEmailId}
                        name="mechanicEmailId"
                        placeholder=" Email id"
                        required /><div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        ref={this.mechanicPassword}
                        name="mechanicPassword"
                        placeholder=" Password"
                        required/><div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.location}
                        name="location"
                        placeholder=" Location"
                        required/><div style={{ fontSize: 12, color: "red" }}>
                        {this.state.locationError}
                      </div>
                    </div>
                  </div>
    
                  <div className="row mt-3">
                    <div className="col-sm-5">
                      <button className="btn btn-primary btn-sm" onClick={this.registerMechanic.bind(this)}> Sign up
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
      onRegister: (mechanic) => {
          dispatch(actionCreators.register(mechanic))
          //alert("to action");
      },
      clearState: () => {
        dispatch(actionCreators.clearState())

    }

}

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MechanicRegister))
