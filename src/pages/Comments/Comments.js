import React, { Component } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';

class Comments extends Component {
  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">How well are you being supported?</h1>
        <form className="formQuestion" noValidate autoComplete="off">
          <TextField
            type="text"
            fullWidth
            multiline
            id="outlined-basic"
            label="Comments"
            variant="outlined"
          />
        </form>
        {/* I need a fancy button here to move to the next page and send the data to redux */}
      </div>
    );
  }
}

export default Comments;
