import React from "react";

const SideBar = props => {
  const leaguename = [];

  if (leaguename.indexOf(props.leagueName) === props.leagueName) {
    return false;
  }
  else {
     leaguename.push(props.leagueName);
  }
 

  return (
    leaguename.map((item, index) => (
      <div key={index} className="jude" >
        {item}
      </div>)
    )
  )

}
export default SideBar;
// onClick={() => props.handleleague(league)}