import React, { Component } from 'react'
import "../component/file.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
 
 class MechanicLogin extends Component {
    constructor(props) {
        super(props);
        this.mechanicEmailId = React.createRef();
        this.password = React.createRef();
    }
 
    componentDidMount() {
        this.props.clearState()
    }
    // componentDidUpdate(){
    //     return(<MechanichRegister/>)
    // }
    
    login() {   
        let credentials = {
            mechanicEmailId: this.mechanicEmailId.current.value,
            password: this.password.current.value,
        }
        this.props.onLogin(credentials)
       // alert(JSON.stringify(credentials))
    }
    // setSession(){
    //     alert("setting sesssion");
    //     this.props.mechanicList.map((mechanic)=>{
    //         sessionStorage.setItem("SessMecId", mechanic.mechanicId);
    //         alert("setting sesssion completed");
    //     })
    // }
    render() {
        return (
            <div>
            <h1>LOGIN</h1>
        <div className="col-md-5 col-md-offset-3" id="Body">
           <form className="form" /*method="post" */>
            <div className="mb-3 row">
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="mechanicEmailId" ref={this.mechanicEmailId}   placeholder="Email-Id" required />
                </div>
                </div>
                <div className="mb-3 row">
                <div className="col-sm-5">
                    <input type="password" className="form-control" name="password" ref={this.password}   placeholder="Password" required/>
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-sm-5">
                    <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
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
        onLogin: (credentials) => {
            dispatch(actionCreators.onLoginVerify(credentials))
           
        },
        clearState: () => {
            dispatch(actionCreators.clearState())

 
        }
 
    }
 
}


 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MechanicLogin))