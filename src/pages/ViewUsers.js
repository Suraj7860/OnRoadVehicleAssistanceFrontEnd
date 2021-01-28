import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/actions'

class ViewUsers extends Component {

    componentDidMount() {
        this.props.onGetUsers()
    }

    delete(userId){
        this.props.onDeleteUser(userId);
    }

    render() {
        let userList
        if(this.props.userList!=null){
        userList=this.props.userList.map((user,index)=>{
            return(
                <tr key={index}>
                    <th>{user.userId}</th>
                    <td>{user.userName}</td>
                    <td>{user.userEmailId}</td>
                    <td>{user.userPhoneNumber}</td>
                    <td>
                        <button onClick={this.delete.bind(this,user.userId)} className="btn btn-danger">DELETE</button>
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
                                    <th scope="col">User ID</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email Id</th>
                                    <th scope="col">User Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userList:state.userList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUsers: () => {
          return  dispatch(actionCreated.getAllUsers())
        },
        onDeleteUser: (userId, newUserObject) => {
          return dispatch(actionCreated.deleteUser(userId, newUserObject))
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps) (ViewUsers)

