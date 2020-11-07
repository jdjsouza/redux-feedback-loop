import React, { Component } from 'react';
// make it look nice
import Button from '@material-ui/core/Button';

class Review extends Component {
  submitButton = (event) => {
    console.log('I finished!');
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">Review Your Feedback</h1>
        {/* I need a fancy submit button here  */}
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

export default Review;
