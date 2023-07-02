import React, { Children } from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <header className="header">
        <h1 style={{ color: "#fffff", fontFamily: "Arial" }}>Logo</h1>
      </header>
    </div>
  );
}

export { Navbar };
