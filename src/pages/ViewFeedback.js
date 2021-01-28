import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/mactions'

class ViewFeedback extends Component {

    componentDidMount() {
        this.props.onGetFeedbacks()
    }
     
    

    render() {
        let feedbackList
        if(this.props.feedbackList!=null){
        feedbackList=this.props.feedbackList.map((feed,index)=>{
        return(
                <tr key={index}>
                    <th>{feed.feedbackId}</th>
                    <td>{feed.userId}</td>
                    <td>{feed.feedback}</td>
                    <td>{feed.ratings}</td>
                    
                    
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
                                    <th scope="col">Feedback ID</th>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Feedback</th>
                                    <th scope="col">Ratings</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        feedbackList:state.feedbackList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetFeedbacks: () => {
          return  dispatch(actionCreated.getAllFeedbacks())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps) (ViewFeedback)

