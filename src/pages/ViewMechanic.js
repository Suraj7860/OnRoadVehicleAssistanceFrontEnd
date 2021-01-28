import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreated from '../actions/actions'

class ViewMechanic extends Component {
    componentDidMount() {
        this.props.onGetMechanics()
    }
    rating(mechanicId){
        this.props.onViewRatings(mechanicId);
    }
   
    delete(mechanicId){
        this.props.onDeleteUser(mechanicId);
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
                    <td>{mechanic.mechanicEmailId}</td>
                    <td>{mechanic.mechanicServiceType}</td>
                    <td>{mechanic.location}</td>
                    <td>
                        <button onClick={this.rating.bind(this,mechanic.mechanicId)} className="btn btn-primary">VIEW RATINGS</button>
                    </td>
                    <td>
                        <button onClick={this.delete.bind(this,mechanic.mechanicId)} className="btn btn-danger">BLOCK MECHANIC</button>
                    </td>
                   
            
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
                                    <th scope="col">Mechanic Id</th>
                                    <th scope="col">Mechanic Name</th>
                                    <th scope="col">Mechanic Phone Number</th>
                                    <th scope="col">Mechanic Email Id</th>
                                    <th scope="col">Mechanic Service Type</th>
                                    <th scope="col">Mechanic Location</th>
                                    <th colSpan="2">Actions</th>
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
        onGetMechanics: () => {
          return  dispatch(actionCreated.getAllMechanics())
        },
        onViewRatings:(mechanicId) => {
            return dispatch(actionCreated.getAllRatings(mechanicId))
        },
        onDeleteUser: (mechanicId, newUserObject) => {
            return dispatch(actionCreated.deleteMechanic(mechanicId, newUserObject))
          },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewMechanic)
