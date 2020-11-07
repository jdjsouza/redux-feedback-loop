import React, { Component } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';

class HomePage extends Component {
  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">How are you feeling today?</h1>
        <form className="formQuestion" noValidate autoComplete="off">
          <TextField
            type="number"
            style={{ width: '175px' }}
            InputProps={{ inputProps: { min: 1, max: 5 } }}
            id="outlined-basic"
            label="Feelings? 1 to 5"
            variant="outlined"
          />
        </form>
      </div>
    );
  }
}

export default HomePage;
