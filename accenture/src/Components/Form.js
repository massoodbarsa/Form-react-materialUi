import React, { Component } from "react";
import Result from "./Result";
import FormSubjects from "./FormSubjects";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "../Css/Form.css";

class Form extends Component {
  state = {
    hide: false,
    result: false,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    postcode: "",
    adres: ""
  };

  handleResult = () => {
    this.setState({
      result: true
    });
  };

  handleReturn = () => {
    this.setState({
      result: false
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleClean = () => {
    console.log("ridi");

    this.setState({});
  };

  handleHide = () => {
    this.setState({
      hide: true
    });
  };

  handleShow = () => {
    this.setState({
      hide: false
    });
  };
  render() {
    const { result, hide } = this.state;
    const {
      firstName,
      lastName,
      email,
      mobile,
      city,
      postcode,
      address
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      mobile,
      city,
      postcode,
      address
    };

    if (result === false) {
      if (hide === false) {
        return (
          <div className="Form">
            <div className="AppBar">
              <AppBar position="static" color="primary">
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
                handleClean={this.handleClean}
                handleHide={this.handleHide}
                values={values}
              />
            </div>
            <div />
          </div>
        );
      } else {
        return (
          <div className='hiddenpage'>
            <Button
            variant="contained"
            color="primary"
            onClick={this.handleShow}
          >
            show Form
          </Button>
          </div>
        );
      }
    } else {
      return (
        <div className="result">
          <div className="AppBar">
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Result
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <Result values={values} handleReturn={this.handleReturn} />
        </div>
      );
    }
  }
}

export default Form;
