import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 style={{ color: "#fffff", fontFamily: "Arial" }}>Logo</h1>
      </header>
      <Greeting appName={"React App"} username={""} />
    </div>
  );
}

export default App;
