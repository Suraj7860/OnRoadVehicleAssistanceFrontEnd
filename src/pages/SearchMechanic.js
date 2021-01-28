import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
//import "../component/file.css"
import * as actionCreators from '../actions/useractions'
 class SearchMechanic extends Component {
    constructor(props){
        super(props);
        this.location=React.createRef();

    } 
    componentDidMount() {
       
    }
    getMechanicbylocation=(e)=>{
        let loc ={location:this.location.current.value}
        this.props.onGetMechanic(loc);
        e.preventDefault();
        
    }
    Request(mechanicId,mechanicServiceType){
        let service={
            location:this.location.current.value,
            mechanicId:mechanicId,
            serviceType:mechanicServiceType,
            userId:sessionStorage.getItem("SessUserId")
        }
        this.props.onRequestMechanic(service);
    }
    render() {
        let mechanicList
        if(this.props.mechanicList!=null){
        mechanicList=this.props.mechanicList.map((mechanic,index)=>{
            return(
               
                    <tr key={index}>
                    <th>{mechanic.mechanicId}</th>
                    <td>{mechanic.mechanicName}</td>
                    <td>{mechanic.mechanicPhoneNumber}</td>
                    <td>{mechanic.mechanicServiceType}</td>
                    <td>{mechanic.mechanicEmailId}</td>
                    <td>
                        <button onClick={this.Request.bind(this,mechanic.mechanicId,mechanic.mechanicServiceType)} className="btn btn-primary">send request</button>
                        {/* <button onClick={this.Rating.bind(this,mechanic.mechanicId)} className="btn btn-danger">View Rating</button> */}
                    </td>
                </tr>
               
            )
        })}
        return (
             <div>
                 <h2>Search Mechanic</h2>
                 <div className="col-md-5 col-md-offset-3" id="Body">
           <form className="form" /*method="post" */>
            <div className="mb-3 row">
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="location" ref={this.location}   placeholder="Enter Your Location" required />
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-sm-5">
                    <button className="btn btn-primary" onClick={this.getMechanicbylocation.bind(this)}>Search Mechanic</button>
                </div>
                </div>
                </form>
                </div>
                <div className="trn-table-div">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone number</th>
                                    <th scope="col">Service Type</th>
                                    <th scope="col">Email Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mechanicList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mechanicList:state.mechanicList,
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetMechanic: (loc) => {
          return  dispatch(actionCreators.getAllmechanic(loc))
        },
        onRequestMechanic: (service) => {
            return  dispatch(actionCreators.requestMechanic(service))
          },

        clearState: () => {
          return  dispatch(actionCreators.clearState())

        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SearchMechanic)
