import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/mactions'
class ViewMechanicRequest extends Component {
    
    componentDidMount() {
        this.props.onGetRequest();
    }


    render() {
        let serviceList
        if(this.props.serviceList!=null){
        serviceList=this.props.serviceList.map((service,index)=>{
            return(
                <tr key={index}>
                    <th>{service.serviceId}</th>
                    <td>{service.serviceType}</td>
                    <td>{service.userId}</td>
                    <td>{service.mechanicId}</td>
                    <td>{service.location}</td>
                </tr>
            )
        })}
        return (
            <div id="view">
                <div className="trn-table-div">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">Service ID</th>
                                    <th scope="col">Service Type</th>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Mechanic ID</th>
                                    <th scope="col">Service Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        serviceList:state.serviceList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetRequest: () => {
          return  dispatch(actionCreated.getRequest())
        },
        clearState: () => {
            return  dispatch(actionCreated.clearState())
          }
  
      }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)( ViewMechanicRequest)
