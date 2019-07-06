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
          label="firstname"
        />
        <TextField
          defaultValue={values.lastName}
          onChange={handleChange("lastName")}
          label="lastname"
        />
        <TextField
          defaultValue={values.email}
          onChange={handleChange("email")}
          label="email"
        />
        <TextField
          defaultValue={values.phoneNumber}
          onChange={handleChange("phoneNumber")}
          label="phonenumber"
        />
        <TextField
          defaultValue={values.city}
          onChange={handleChange("city")}
          label="city"
        />
        <TextField
          defaultValue={values.postcode}
          onChange={handleChange("postcode")}
          label="postcode"
        />
        <TextField
          defaultValue={values.adres}
          onChange={handleChange("adres")}
          label="adres"
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
