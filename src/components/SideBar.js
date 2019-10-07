import React from "react";

// setting the props passed from app.js 
const SideBar = props => {
  // filtering the dublicated league name

  const leaguename = [];

  if (leaguename.includes(props.leagueName) ) {
    return false;
  }
  else {
     leaguename.push(props.leagueName);
  }
//  displaying the result

  return leaguename.map((item, index) => (
    <div key={index} className="jude">
      <p className="pac">{item}</p>
    </div>
  ));

}
export default SideBar;
