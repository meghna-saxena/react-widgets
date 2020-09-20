import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Filter from "./Filter";

class RecordTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFilter: "2019-11-29",
      txns: this.props.txns,
      columns: [],
      isFiltered: false,
    };

    this.filter = this.filter.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.sort = this.sort.bind(this);
  }

  filter() {
    const filteredTxns = this.props.txns.filter(
      (tx) => tx.date == this.state.dateFilter
    );

    this.setState({ columns: filteredTxns });
  }

  handleDateChange = (date) => {
    this.setState({ dateFilter: date });
  };

  sort() {
    function compare(a, b) {
      if (a.amount < b.amount) {
        return -1;
      }
      if (a.amount > b.amount) {
        return 1;
      }
      return 0;
    }

    const col = this.props.txns.sort(compare);
    this.setState({ columns: col });
  }

  getTableColumns = (tx) => {
    const keys = Object.keys(tx);

    function getValue(key) {
      if (key === "type") {
        return tx[key] === 1 ? "Debit" : "Credit";
      }
      return tx[key];
    }

    return keys.map((item) => {
      return <TableCell>{getValue(item)}</TableCell>;
    });
  };

  render() {
    const col = this.state.columns.length
      ? this.state.columns
      : this.props.txns;
    return (
      <div>
        <Filter
          handleDateChange={this.handleDateChange}
          filter={this.state.dateFilter}
          handleFilter={this.filter}
        />
        <br />
        <br />
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "darkgray" }}>
              <TableCell className="table-header">Date</TableCell>
              <TableCell className="table-header">Description</TableCell>
              <TableCell className="table-header">Type</TableCell>
              <TableCell className="table-header">
                <span id="amount" onClick={this.sort}>
                  Amount ($)
                </span>
              </TableCell>
              <TableCell className="table-header">Available Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {col.map((tx) => (
              <TableRow>{this.getTableColumns(tx)}</TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default RecordTable;
