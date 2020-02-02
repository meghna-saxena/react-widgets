import React, { Component } from "react";
import "./App.css";
import Autocomplete from "./Autocomplete";
import Dropdown from "./Dropdown";
import Breadcrumb from "./Breadcrumb";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Autocomplete /> */}
        {/* <Dropdown /> */}
        <Breadcrumb />
      </div>
    );
  }
}
export default App;
