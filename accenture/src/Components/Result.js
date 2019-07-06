import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Result extends Component {
  
    prevPage = e => {
    e.preventDefault();
    this.props.handleReturn();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        {values.firstname}
        result
        <Button
          className="MU-Button"
          variant="contained"
          color="primary"
          onClick={this.prevPage}
        >
          Return
        </Button>
      </div>
    );
  }
}

export default Result;
