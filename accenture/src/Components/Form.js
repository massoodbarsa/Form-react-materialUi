import React, { Component } from "react";
import Result from "./Result";
import FormSubjects from "./FormSubjects";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "../Css/Form.css";

class Form extends Component {
  state = {
    result: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    postcode: "",
    adres: ""
  };

  handleResult = () => {
    this.setState({
      result: true
    });
  };

  handleReturn=()=>{
    this.setState({
        result: false
      });
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    const { result } = this.state;
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      postcode,
      adres
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      postcode,
      adres
    };

    if (result == false) {
      return (
        <div className="Form">
          <div className="AppBar">
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Photos
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <div className="FormSubjects">
            <FormSubjects
              handleResult={this.handleResult}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
          <div />
        </div>
      );
    } else {
      return (
        <div className="result">
          <Result 
          values={values} 
          handleReturn={this.handleReturn}
          />
        </div>
      );
    }
  }
}

export default Form;
