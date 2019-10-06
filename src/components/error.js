import React from "react";
import "./lf-style.css";
const Error = () => {
    return (
      <center>
        <div className="error">
          <h1>Error loading</h1>
          <h3>This site can’t be reached</h3>
          try:
          <ul>
            {" "}
            <li>check your internet connection</li>
            <li>or enter the correct url</li>
            <li> Checking the network cables, modem, and router</li>
            <li >Reconnecting to Wi-Fi</li>
          </ul>
        </div>
      </center>
    );
};
export default Error;
