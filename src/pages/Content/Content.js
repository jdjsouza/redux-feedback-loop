import React, { Component } from 'react';
import { connect } from 'react-redux';
// make it look nice
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

class Content extends Component {
  state = {
    understanding: '',
  };

  handleChange = (event) => {
    this.setState({
      understanding: parseInt(event.target.value),
    });
  };

  nextButton = (event) => {
    if (this.state.understanding === '' || isNaN(this.state.understanding)) {
      swal('Field Required', 'Please enter a number between 1 and 5', 'error');
      return;
    } else if (this.state.understanding < 0 || this.state.understanding > 5) {
      swal('Input', 'Please use a number between 1 and 5', 'error');
      return;
    } else {
      this.props.dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: this.state.understanding,
      });
      this.setState({
        understanding: '',
      });
    }
    this.props.history.push('/supported');
  };

  backButton = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">
          How well are you understanding the content?
        </h1>
        <form className="formQuestion" noValidate autoComplete="off">
          <TextField
            onChange={this.handleChange}
            type="number"
            style={{ width: '200px' }}
            InputProps={{ inputProps: { min: 1, max: 5 } }}
            id="outlined-basic"
            label="1 :'( to 5 :^D"
            variant="outlined"
          />
          <div className="btn">
            <Button
              style={{ marginRight: '10px' }}
              onClick={this.backButton}
              variant="outlined"
              color="primary"
            >
              {'<='} Previous
            </Button>
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

export default connect(mapStoreToProps)(Content);
