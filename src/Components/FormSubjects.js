import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../Css/FormSubjects.css";
import TextField from "@material-ui/core/TextField";

class FormSubjects extends Component {
  filedNames = [
    "firstName",
    "lastName",
    "email",
    "mobile",
    "city",
    "postcode",
    "address"
  ];

  nextPage = e => {
    e.preventDefault();
//take the key from every field
    let field = this.filedNames.map(i => {
      return document.getElementById(i).value;
    });
//take the value from every field

    let fieldName = field.map(j => {
      return j;
    });

    let fieldLength = field.length;
    let fieldNameLength = fieldName.length;
//check if there is a empty string then manipulate the length of values 
    for (const name of fieldName) {
      if (name === "") {
        fieldNameLength--;
        // console.log(`filed is ${fieldLength} and fieldname is ${fieldNameLength}`)
      }
    }
    //if the primary length of each array is not the same then there is at least one empty field
    if (fieldNameLength === fieldLength) this.props.handleResult();
  };

  HideShow = e => {
    e.preventDefault();
    this.props.handleHide();
  };

  Clean = e => {
    e.preventDefault();
    this.props.handleClean();
//get value of every field and clear it
    let field = this.filedNames.map(i => {
      document.getElementById(i).value = "";
    });
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="FormSubjects">
        <TextField
          required
          className="textField"
          id="firstName"
          ref="firstName"
          defaultValue={values.firstName}
          onChange={handleChange("firstName")}
          label="Firstname"
        />
        <TextField
          required
          className="textField"
          id="lastName"
          defaultValue={values.lastName}
          onChange={handleChange("lastName")}
          label="Lastname"
        />
        <TextField
          required
          className="textField"
          id="email"
          defaultValue={values.email}
          onChange={handleChange("email")}
          label="Email"
        />
        <TextField
          required
          className="textField"
          id="mobile"
          defaultValue={values.mobile}
          onChange={handleChange("mobile")}
          label="Mobile"
        />
        <TextField
          required
          className="textField"
          id="city"
          defaultValue={values.city}
          onChange={handleChange("city")}
          label="City"
        />
        <TextField
          required
          className="textField"
          id="postcode"
          defaultValue={values.postcode}
          onChange={handleChange("postcode")}
          label="Postcode"
        />
        <TextField
          required
          className="textField"
          id="address"
          defaultValue={values.address}
          onChange={handleChange("address")}
          label="Address"
        />
        <div className="buttons">
          <Button variant="contained" color="primary" onClick={this.nextPage}>
            Result
          </Button>
          <Button variant="contained" color="primary" onClick={this.Clean}>
            Clean
          </Button>
          <Button variant="contained" color="primary" onClick={this.HideShow}>
            Hide Form
          </Button>
        </div>
      </div>
    );
  }
}

export default FormSubjects;
