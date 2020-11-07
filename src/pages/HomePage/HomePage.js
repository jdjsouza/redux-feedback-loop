import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
  state = {
    feeling: '',
  };

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  nextButton = (event) => {
    this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
    this.setState({
      feeling: '',
    });
    this.props.history.push('/content');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">How are you feeling today?</h1>
        <form className="formQuestion" noValidate autoComplete="off">
          <TextField
            onChange={this.handleChange}
            type="number"
            style={{ width: '175px' }}
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

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(HomePage);
