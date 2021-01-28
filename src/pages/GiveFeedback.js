import React, { Component } from 'react'
import "../style/userfile.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/useractions'

class GiveFeedback extends Component {
  constructor(props){
    super(props);
    this.ratings=React.createRef();
    this.feedback=React.createRef();
    
  }
  componentDidMount() {
    this.props.clearState()
}

giveFeed()
{
  let feedback_obj={
    ratings:this.ratings.current.value,
    feedback:this.feedback.current.value,
  }
 
  this.props.onFeedback(feedback_obj);
  
}
    render() {
        return (
          <div>
          <h1>GIVE FEEDBACK</h1>
            <div className="col-md-5 col-md-offset-3" id="Body"  >
                <form className="form" >
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.ratings}
                        name="rating"
                        placeholder="Rating"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.feedback}
                        name="feedback"
                        placeholder=" Give Feedback"
                        required/>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-5">
                      <button className="btn btn-primary btn-sm" onClick={this.giveFeed.bind(this)}> Submit Feedback
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
      returnedMessage: state.returnedMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onFeedback: (feedback_obj) => {
          dispatch(actionCreators.givefeedback(feedback_obj))
          //alert("to action");
      },
      clearState: () => {
        dispatch(actionCreators.clearState())

    }

}

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GiveFeedback))