import React, { useEffect, useState, Fragment } from "react";
import Body from "./LFscoreBody";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Loading from "./loading";
import Error from "./error";

const App = () => {
  const [scores, Setscores] = useState([]);
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    Setloading(!loading);
   
    await fetch("https://secure-lake-56026.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        Setscores([data.data]);
        if (data) {
          console.log(data);
          Setloading(false);
             Seterror(false);
        }
      })
      .catch(e => {
        console.log(e);
        Setloading(false);
        Seterror(!error);
      });
  };

  return (
    <Fragment>
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : error ? (
        <Error />
      ) : (
        <div className="body">
          <Header />
          <div className="result">
            <div>
              {scores.map((score, index) =>
                score.map((sc, i) => (
                  <SideBar
                    key={i}
                    style={{ marginLeft: "30px", color: "white" }}
                    leagueName={sc.leagueName}
                  />
                ))
              )}
            </div>
            <div className=" base">
              {scores.map((score, index) =>
                score.map((sc, i) => (
                  <Body
                    key={i}
                    style={{ marginLeft: "30px", color: "white" }}
                    homeName={sc.homeName}
                    awayName={sc.awayName}
                    homeScore={sc.homeScore}
                    awayScore={sc.awayScore}
                    matchTime={sc.matchTime}
                    minute={sc.extraExplain.minute}
                  />
                ))
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </Fragment>
  );
};
export default App;
