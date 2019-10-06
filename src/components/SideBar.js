import React from "react";

const SideBar = props => {
  const leaguename = [];

  if (leaguename.indexOf(props.leagueName) !== props.leagueName) {
    leaguename.push(props.leagueName);
   }
  
  // if (leaguename.includes(props.leagueName)) { }
  // else { leaguename.push(props.leagueName) }


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