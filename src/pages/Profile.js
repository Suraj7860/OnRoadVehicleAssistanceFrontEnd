import React, { Component } from 'react'
import { connect } from 'react-redux';
// import "../component/file.css"
import * as actionCreators from '../actions/useractions'
class Profile extends Component {
    constructor(props){
        super(props);
        this.userId=React.createRef();
        this.userName=React.createRef();
        this.userPassword=React.createRef();
        this.userEmailId=React.createRef();
        this.userPhoneNumber=React.createRef();
        this.state={
          userList:''
        }
      }
      componentDidMount() {
        // this.props.clearState()
        this.props.onGetUser();
    }

  //   componentDidUpdate() {
  //     let check = this.props.returnedMessage.split(' ')
  //     if (check[0] === 'Successfully') {
  //         setTimeout(() => {
  //             this.props.history.push('/profile')
  //         }, 2000)
  //     }
  // }

    changeValue=()=>{
      if(this.props.userList!=null){
        this.props.userList.map((user)=>{
         // sessionStorage.setItem("SessMecId", mechanic.mechanicId);
            document.getElementById("userId").value = user.userId;
            document.getElementById("userName").value = user.userName;
            document.getElementById("userPassword").value = user.userPassword;
            document.getElementById("userEmailId").value = user.userEmailId;
            document.getElementById("userPhoneNumber").value = user.userPhoneNumber;
        
        });

    }}
    
    updateUser()
    {
      let mechanic={
        userId:this.userId.current.value,
        userName:this.userName.current.value,
        userPassword:this.userPassword.current.value,
        userEmailId:this.userEmailId.current.value,
        userPhoneNumber:this.userPhoneNumber.current.value}
      // alert("before Update");
      this.props.onUpdateUser(mechanic);
      //alert("before Update");
    
    }
        render() {
            this.changeValue();
            return (
              <div>
              <h1>User Profile </h1>
              <div className="col-md-5 col-md-offset-3" id="Body"  >
                    <form className="form" /*method="post"*/  >
                      <div className="mb-3 row">
                        <div className="col-sm-5 ">
                        <input
                            type="text"
                            id="userId"
                            className="form-control form-control-sm"
                            ref={this.userId}
                            name="userId"
                            placeholder="ID"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="col-sm-5 ">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            ref={this.userName}
                            name="userName"
                            placeholder="Name"
                            id="userName"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="col-sm-5">
                          <input
                            type="password"
                            className="form-control form-control-sm"
                            ref={this.userPassword}
                            name="userPassword"
                            placeholder="Password"
                            id="userPassword"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="col-sm-5">
                          <input
                            type="email"
                            className="form-control form-control-sm"
                            ref={this.userEmailId}
                            name="userEmailId"
                            placeholder=" Email Id"
                            id="userEmailId"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="col-sm-5">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            ref={this.userPhoneNumber}
                            name="userPhoneNumber"
                            placeholder=" phone number"
                            id="userPhoneNumber"
                            required/>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-5">
                          <button className="btn btn-primary btn-sm" onClick={this.updateUser.bind(this)}> Update Profile
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
          userList:state.userList
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
      return {
        onGetUser:()=>{
            dispatch(actionCreators.getUser())
           // alert("to action");
        },
        onUpdateUser: (user) => {
              dispatch(actionCreators.updateUser(user))
              //alert("to action");
          },
          clearState: () => {
            dispatch(actionCreators.clearState())
    
        }
    
    }
    

}


export default connect(mapStateToProps, mapDispatchToProps) (Profile)
