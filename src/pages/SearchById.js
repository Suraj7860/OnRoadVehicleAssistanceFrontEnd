import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchById extends Component {
  constructor(props) {
     super(props)
      this.mechanicId = React.createRef()

    }
search() {
     this.props.onSearchById(this.mechanicId.current.value)
}
componentDidMount() {
    this.props.clearState()
}
render() {
    let feedbackList
    if(this.props.feedbackList){
    feedbackList = this.props.feedbackList.map((feed, index) => {
     return (
            <tr key={index}>
                    <th>{feed.feedbackId}</th>
                    <td>{feed.userId}</td>
                    <td>{feed.feedback}</td>
                    <td>{feed.ratings}</td>
            </tr>
            )
        })}
            return (

            <div className="search-mechanic-id">
                <div className="mb-3 input-search-id ">
                    <input type="text" ref={this.mechanicId} className="form-control" id="mechanicId" placeholder="Enter Mechanic Id" />
                </div>
                <div>
                <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                </div>
                <hr />
                <div className="feedback-table-div">
                    <table className="table table-info feedback-table">
                        <thead>
                            <tr>

                                <th scope="col">Feedback Id</th>
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

        feedbackList: state.feedbackList,

        returnedMessage: state.returnedMessage

    }

}

 

const mapDispatchToProps = (dispatch) => {

    return {

        onSearchById: (mechanicId) => dispatch(actionCreators.getFeedbackByMechanicId(mechanicId)),

        clearState: () => dispatch(actionCreators.clearState())

    }

}

 

export default connect(mapStateToProps, mapDispatchToProps)(SearchById)