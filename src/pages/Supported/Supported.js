import React, { Component } from 'react';
import { connect } from 'react-redux';
// make it look nice
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Supported extends Component {
  state = {
    support: '',
  };

  handleChange = (event) => {
    this.setState({
      support: parseInt(this.event.target.value),
    });
  };

  nextButton = (event) => {
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
    this.setState({
      support: '',
    });
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">How well are you being supported?</h1>
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
        </form>
        {/* I need a fancy button here to move to the next page and send the data to redux */}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Supported);
