import React, { Component } from 'react';
import { connect } from 'react-redux';
// make it look nice
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

class HomePage extends Component {
  state = {
    feeling: '',
  };

  handleChange = (event) => {
    this.setState({
      feeling: parseInt(event.target.value),
    });
  };

  nextButton = (event) => {
    if (this.state.feeling === '' || isNaN(this.state.feeling)) {
      swal('Field Required', 'Please enter a number between 1 and 5', 'error');
      return;
    } else if (this.state.feeling < 0 || this.state.feeling > 5) {
      swal('Input', 'Please use a number between 1 and 5', 'error');
      return;
    } else {
      this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
      this.setState({
        feeling: '',
      });
      this.props.history.push('/content');
    }
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
