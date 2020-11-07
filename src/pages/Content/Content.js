import React, { Component } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';

class Content extends Component {
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
            label="Understanding? 1 to 5"
            variant="outlined"
          />
        </form>
      </div>
    );
  }
}

export default Content;
