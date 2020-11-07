import React, { Component } from 'react';
import { connect } from 'react-redux';
// make it look nice
import Button from '@material-ui/core/Button';
import Axios from 'axios';

class Review extends Component {
  submitButton = (event) => {
    const data = {
      feeling: this.props.store.feelingReducer,
      understanding: this.props.store.understandingReducer,
      support: this.props.store.supportReducer,
      comments: this.props.store.commentReducer,
    };
    Axios.post('/feedback', data)
      .then((response) => {
        this.props.history.push('/confirm');
      })
      .catch((err) => {
        alert('shit is broken');
      });
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">Review Your Feedback</h1>
        <div className="review">
          <p>
            Feelings:{' '}
            <span style={{ fontWeight: 'normal' }}>
              {this.props.store.feelingReducer}
            </span>
          </p>
          <p>
            Understanding:{' '}
            <span style={{ fontWeight: 'normal' }}>
              {this.props.store.understandingReducer}
            </span>
          </p>
          <p>
            Support:{' '}
            <span style={{ fontWeight: 'normal' }}>
              {this.props.store.supportReducer}
            </span>
          </p>
          <p className="commentContainer">
            Comments:{' '}
            <span className="comment">{this.props.store.commentReducer}</span>
          </p>
        </div>
        <div className="btn">
          <Button
            onClick={this.submitButton}
            variant="outlined"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Review);
