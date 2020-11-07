import React, { Component } from 'react';
// make it look nice
import Button from '@material-ui/core/Button';

class Confirm extends Component {
  newFeedback = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">Thank you for your feedback!!!</h1>
        <div className="btn">
          <Button onClick={this.newFeedback} variant="outlined" color="primary">
            Leave New Feedback
          </Button>
        </div>
      </div>
    );
  }
}

export default Confirm;
