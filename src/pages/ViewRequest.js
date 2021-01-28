import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreated from '../actions/actions'

class ViewRequest extends Component {
    constructor(props) {
        super(props);
}
    
    componentDidMount() {
        this.props.onGetServices()
        
    }
    render() {
        let serviceList
        if(this.props.serviceList!=null){
        serviceList=this.props.serviceList.map((service,index)=>{
            return(
                <tr key={index}>
                    <th>{service.serviceId}</th>
                    <td>{service.userId}</td>
                    <td>{service.mechanicId}</td>
                    <td>{service.serviceType}</td>
                    <td>{service.location}</td>
            
                </tr>
            )
        })}
        return (
            <div>
                 <div className="trn-table-div">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">Request Id</th>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Mechanic Id</th>
                                    <th scope="col">Service Type</th>
                                    <th scope="col">Location</th>
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
        onGetServices: () => {
          return  dispatch(actionCreated.getAllServices())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewRequest)
