import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import { Navbar } from "./components/Navbar";
import { PersonCard } from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Greeting appName={"React App"} username={""} />
      <PersonCard></PersonCard>
    </div>
  );
}

export default App;
