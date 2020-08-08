import React from "react";
import "./App.css";
import getUsers from "./utils/API.js";

function App() {
  console.log(getUsers);
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
