import React from "react";

// setting the props passed from app.js
const SideBar = () => {
  // filtering the dublicated league name

  const leaguename = [
    "Jamaica Premier League",
    "Nicaragua Apertura league",
    "Barbados Challenge Cup",
    "Aruba Division Di Honor",
    "Primera Division de Colombiano-Apertura",
    "Mexico Segunda Division",
    "Chile Primera B",
    "Primera Division de Paraguay",
    "Olympics(N And C American) Quali-Woman",
    "Fiji cup",
    "France Ligue 2",
    "Argentine Division 2",
    "Brazil Campeonato Paulista Youth",
    "Argentina Ding Group Tebolidun League Manchester",
    "German Bundesliga 2",
    "Germany Regionalliga",
    "German 3.Liga",
    "Sweden U19",
    "England U23 League Cup",
    "Brazil Copa Gaucho",
    "Uruguay Reserve League",
    "Belgian U21",
    "Brazil Youth",
    "Denmark U21",
    "Romania Liga I",
    "Norway Division 4",
    "Estonia II Liiga",
    "Sweden Div 3 Mellersta",
    "Israel Premier League",
    "Greece National A",
    "Holland Reserve League",
    "Palestine Football League",
    "Bulgaria B PFG",
    "Israel Leumit League",
    "Israel Cup",
    "International Friendly",
    "Finland Ykkonen",
    "Bahraini FA Cup",
    "Sweden Folksam U21 Superettan",
    "Saudi Arabia Division 1",
    "African Nations Cup",
    "International Club Friendly",
    "European Women",
    "Croatia U19",
    "Indonesia Division 1",
    "Scotland Development League",
    "Italian Campionato Nazionale Primavera",
    "Scottish Reserves League",
    "Kosovo Superliga",
    "English Premier League"
  ];

  // if (leaguename.includes(props.leagueName) ) {
  //   return false;
  // }
  // else {
  //    leaguename.push(props.leagueName);
  //    console.log(leaguename);
  // }
  //  displaying the result

  return leaguename.map((item, index) => (
    <div key={index} className="jude">
      <p className="pac">{item}</p>
    </div>
  ));
};
export default SideBar;
