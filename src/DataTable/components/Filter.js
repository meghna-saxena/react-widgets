import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Filter extends Component {
  handleDate = (e) => {
    const date = e.target.value;
    this.props.handleDateChange(date);
  };

  render() {
    return (
      <div>
        <span style={{ verticalAlign: "bottom" }}>
          Filter By: &nbsp;&nbsp;&nbsp;{" "}
        </span>

        <TextField
          id="date"
          label="Transaction Date"
          type="date"
          defaultValue={this.props.dateFilter}
          InputLabelProps={{
            shrink: true,
          }}
          value={this.props.dateFilter}
          onChange={this.handleDate}
        />
        <span style={{ verticalAlign: "bottom" }}>
          <Button variant="contained" onClick={() => this.props.handleFilter()}>
            Filter
          </Button>
        </span>
      </div>
    );
  }
}
export default Filter;
