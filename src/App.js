import React, { Component } from "react";
import "./App.css";
import Autocomplete from "./Autocomplete";
import Dropdown from "./Dropdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Autocomplete /> */}
        <Dropdown />
      </div>
    );
  }
}
export default App;
