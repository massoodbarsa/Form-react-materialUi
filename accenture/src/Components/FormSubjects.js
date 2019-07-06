import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../Css/FormSubjects.css";
import TextField from "@material-ui/core/TextField";

class FormSubjects extends Component {
  nextPage = e => {
    e.preventDefault();
    this.props.handleResult();
  };

  HideShow = e => {
    e.preventDefault();
    this.props.handleHide();
  };

  Clean = e => {
    e.preventDefault();
    this.props.handleClean();
  };


  render() {
    const { values, handleChange } = this.props;
    console.log(this.props.values);

    return (
      <div className="FormSubjects">
        <TextField
        //   required="true"
          defaultValue={values.firstname}
          onChange={handleChange("firstName")}
          label="Firstname"
        />
        <TextField
        //   required="true"
          defaultValue={values.lastName}
          onChange={handleChange("lastName")}
          label="Lastname"
        />
        <TextField
        //   required="true"
          defaultValue={values.email}
          onChange={handleChange("email")}
          label="Email"
        />
        <TextField
        //   required="true"
          defaultValue={values.mobile}
          onChange={handleChange("mobile")}
          label="Mobile"
        />
        <TextField
        //   required="true"
          defaultValue={values.city}
          onChange={handleChange("city")}
          label="City"
        />
        <TextField
        //   required="true"
          defaultValue={values.postcode}
          onChange={handleChange("postcode")}
          label="Postcode"
        />
        <TextField
        //   required="true"
          defaultValue={values.address}
          onChange={handleChange("address")}
          label="Address"
        />
        <div className='buttons'>
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextPage}
          >
            Result
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.Clean}
          >
            Clean
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.HideShow}
          >
            Hide Form
          </Button>
        </div>
      </div>
    );
  }
}

export default FormSubjects;
