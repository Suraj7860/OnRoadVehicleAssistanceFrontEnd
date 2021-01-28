import React, { Component } from 'react'
import { connect } from 'react-redux';
import "../style/file1.css"
import * as actionCreators from '../actions/mactions'
class MechanicProfile extends Component {
    constructor(props){
        super(props);
        this.mechanicId=React.createRef();
        this.mechanicName=React.createRef();
        this.mechanicPhoneNumber=React.createRef();
        this.mechanicServiceType=React.createRef();
        this.mechanicEmailId=React.createRef();
        this.mechanicPassword=React.createRef();
        this.location=React.createRef();
        this.state={
          mechanicList:''
        }
      }
      componentDidMount() { 
        this.props.onGetMechanic();
        //this.changeValue();
    }

    changeValue=()=>{
      if(this.props.mechanicList!=null){
        this.props.mechanicList.map((mechanic)=>{
         // sessionStorage.setItem("SessMecId", mechanic.mechanicId);
            console.log(mechanic.mechanicId)
            document.getElementById("mechanicId").value = mechanic.mechanicId;
            document.getElementById("mechanicName").value = mechanic.mechanicName;
            document.getElementById("mechanicPhoneNumber").value = mechanic.mechanicPhoneNumber;
            document.getElementById("mechanicServiceType").value = mechanic.mechanicServiceType;
            document.getElementById("mechanicEmailId").value = mechanic.mechanicEmailId;
            document.getElementById("mechanicPassword").value = mechanic.mechanicPassword;
            document.getElementById("location").value = mechanic.location;
        });}

    }
    
    updateMechanic()
    {
      let mechanic={
        mechanicId:this.mechanicId.current.value,
        mechanicName:this.mechanicName.current.value,
        mechanicPhoneNumber:this.mechanicPhoneNumber.current.value,
        mechanicServiceType:this.mechanicServiceType.current.value,
        mechanicEmailId:this.mechanicEmailId.current.value,
        mechanicPassword:this.mechanicPassword.current.value,
        location:this.location.current.value
      }
      // alert("before Update");
      this.props.onUpdateMechanic(mechanic);
      //alert("before Update");
    
    }
        render() {
            this.changeValue();
            return (
              <div>
              <h1>Mechanic Profile </h1>
              <div className="col-md-5 col-md-offset-3" id="Body"  >
                    <form className="form" /*method="post"*/  >
                      <div className="mb-3 row">
                        <div className="col-sm-5 ">
                        <input
                            type="text"
                            id="mechanicId"
                            className="form-control form-control-sm"
                            ref={this.mechanicId}
                            name="mechanicId"
                            placeholder="ID"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="col-sm-5 ">
                        <input
                            type="text"
                            id="12"
                            className="form-control form-control-sm"
                            ref={this.mechanicName}
                            name="mechanicName"
                            placeholder="Name"
                            id="mechanicName"
                            required
                          />
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
                            id="mechanicPhoneNumber"
                            required
                          />
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
                            id="mechanicServiceType"
                            required
                          />
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
                            id="mechanicEmailId"
                            required/>
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
                            id="mechanicPassword"
                            required/>
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
                            id="location"
                            required/>
                        </div>
                      </div>
        
                      <div className="row mt-3">
                        <div className="col-sm-5">
                          <button className="btn btn-primary btn-sm" onClick={this.updateMechanic.bind(this)}> Update Profile
                          </button>
                          </div>
                        </div>
                        </form>
                </div>
                </div>
            )
        }
    }
    const mapStateToProps = (state) => {
      return {
          returnedMessage: state.returnedMessage,
          mechanicList:state.mechanicList
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
      return {
        onGetMechanic:()=>{
            dispatch(actionCreators.getMechanic())
           // alert("to action");
        },
        onUpdateMechanic: (mechanic) => {
              dispatch(actionCreators.updateMechanic(mechanic))
              //alert("to action");
          },
          clearState: () => {
            dispatch(actionCreators.clearState())
    
        }
    
    }
    

}


export default connect(mapStateToProps, mapDispatchToProps) (MechanicProfile)
