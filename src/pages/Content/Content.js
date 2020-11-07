import React, { Component } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Content extends Component {
  nextButton = (event) => {
    this.props.history.push('/supported');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">
          How well are you understanding the content?
        </h1>
        <form className="formQuestion" noValidate autoComplete="off">
          <TextField
            type="number"
            style={{ width: '200px' }}
            InputProps={{ inputProps: { min: 1, max: 5 } }}
            id="outlined-basic"
            label="1 :'( to 5 :^D"
            variant="outlined"
          />
          <div className="btn">
            <Button
              onClick={this.nextButton}
              variant="outlined"
              color="primary"
            >
              Next {'=>'}
            </Button>
          </div>
          {/* I need a fancy button here to move to the next page and send the data to redux */}
        </form>
      </div>
    );
  }
}

export default Content;
