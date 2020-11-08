import React, { Component } from 'react';
import { connect } from 'react-redux';
// make it look nice
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Comments extends Component {
  state = {
    comments: '',
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  nextButton = (event) => {
    this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
    this.setState({
      comments: '',
    });
    this.props.history.push('/review');
  };

  backButton = (event) => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">How well are you being supported?</h1>
        <form className="formQuestion" noValidate autoComplete="off">
          <TextField
            onChange={this.handleChange}
            type="text"
            fullWidth
            multiline
            id="outlined-basic"
            label="Comments"
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
              Review {'=>'}
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

export default connect(mapStoreToProps)(Comments);
