import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import "../Css/Result.css";



class Result extends Component {
  prevPage = e => {
    e.preventDefault();
    this.props.handleReturn();
  };

  render() {
    const { values } = this.props;

    console.log(values);

    return (
      <div className='result'>
          
        <List>
          <ListItemText primary="Firstname" secondary={values.firstName} />

          <ListItemText primary="Lastname" secondary={values.lastName} />

          <ListItemText primary="Email" secondary={values.email} />

          <ListItemText primary="Mobile" secondary={values.mobile} />

          <ListItemText primary="City" secondary={values.city} />

          <ListItemText primary="Postcode" secondary={values.postcode} />

          <ListItemText primary="Address" secondary={values.address} />

        </List>

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
