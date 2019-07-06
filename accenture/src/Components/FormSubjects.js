import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../Css/FormSubjects.css";
import TextField from "@material-ui/core/TextField";

class FormSubjects extends Component {
  
    nextPage = e => {
    e.preventDefault();
    this.props.handleResult();
  };

  render() {
    const { values, handleChange } = this.props;
    console.log(this.props.values);

    return (
      <div className="FormSubjects">
        <TextField
          defaultValue={values.firstname}
          onChange={handleChange("firstName")}
          label="Firstname"
        />
        <TextField
          defaultValue={values.lastName}
          onChange={handleChange("lastName")}
          label="Lastname"
        />
        <TextField
          defaultValue={values.email}
          onChange={handleChange("email")}
          label="Email"
        />
        <TextField
          defaultValue={values.mobile}
          onChange={handleChange("mobile")}
          label="Mobile"
        />
        <TextField
          defaultValue={values.city}
          onChange={handleChange("city")}
          label="City"
        />
        <TextField
          defaultValue={values.postcode}
          onChange={handleChange("postcode")}
          label="Postcode"
        />
        <TextField
          defaultValue={values.address}
          onChange={handleChange("address")}
          label="Address"
        />

        <Button
          className="MU-Button"
          variant="contained"
          color="primary"
          onClick={this.nextPage}
        >
          Result
        </Button>
      </div>
    );
  }
}

export default FormSubjects;
