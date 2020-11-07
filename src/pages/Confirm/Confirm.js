import React, { Component } from 'react';
// make it look nice
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

class Confirm extends Component {
  render() {
    return (
      <div className="formContainer">
        <h1 className="formQuestion">Thank you for your cooperation!!!</h1>
      </div>
    );
  }
}

export default Confirm;
