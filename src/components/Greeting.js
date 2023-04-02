import React from "react";
import "./Greeting.css";

function Greeting(props) {
  console.log(props);
  console.log(props.appName);
  return (
    <div className="App1">
      <h2>dobro dosli na nas {props.appName}</h2>
      <h3>hvala sto ste nas posetili, {props.username}</h3>
    </div>
  );
}

export default Greeting;
