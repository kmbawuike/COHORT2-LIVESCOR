import React from "react";
import "./lf-style.css";

const Body = props => {
  return (
    <div className="strip">
      <div className="tin">
        <p>{new Date(props.matchTime * 1000).toUTCString().slice(-11, -7)}</p>
        <p>{props.homeName}</p>
        <p>{props.homeScore}</p>
        <p>vs</p>
        <p>{props.awayScore}</p>
        <p>{props.awayName}</p>
        <p>{props.minute}</p>
      </div>
    </div>
  );
};

export default Body;
