import React from "react";
import "./lf-style.css";

// Setting the passed props from app.js to Body
// and rendering the passed props to page

const Body = props => {
  return (
    <div className="strip">
      <div className="tin">
        <p>{new Date(props.matchTime * 1000).toUTCString().slice(-11, -7)}</p>
        <p className="home">{props.homeName}</p>
        <p>{props.homeScore}</p>
        <p>vs</p>
        <p>{props.awayScore}</p>
        <p className="home">{props.awayName}</p>

        {/* setting the match to FT if match is done */}

        {props.minute == 0 ? <p>FT</p> : props.minute}
      </div>
    </div>
  );
};

export default Body;
