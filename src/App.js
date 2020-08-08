import React, { Component } from "react";
import "./App.css";
import getUsers from "./utils/API.js";
import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  render() {
    console.log(getUsers);
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
