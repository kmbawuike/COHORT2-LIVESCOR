import React, { useEffect, useState, Fragment } from "react";
import Body from "./LFscoreBody";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Loading from "./loading";
import Head from "./Head";
import Error from "./error";

const App = () => {
  // creating states for Data storage, loading, and error page.
  // data storage
  const [scores, Setscores] = useState([]);
  // loading state
  const [loading, Setloading] = useState(false);
  // erroe state
  const [error, Seterror] = useState(false);

  // the call of the Api request

  useEffect(() => {
    getData();
  }, []);

  // setting the Api request

  const getData = async () => {
    // changed the state of loading

    Setloading(!loading);
    await fetch("https://secure-lake-56026.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        Setscores([data.data]);
        if (data) {
          console.log(data);
          Setloading(false);
          // changed the state of error
          Seterror(false);
        }
      })
      // error catch
      .catch(e => {
        console.log(e);
        Setloading(false);
        Seterror(!error);
      });
  };

  return (
    <Fragment>
      {/* if laoding is true display loading sign else if error detected display
      error message else display the site content */}
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : error ? (
        <Error />
      ) : (
        <div className="body">
          <Head />
          <div className="result">
            <div>
              {/* redering the stored data by mapping the stored data  which 
              only the legue name was passed as a props to the sidebar*/}
              
              <SideBar />
            </div>
            {/* redering the stored data by mapping the stored data  and passing the right 
            information as a props to the body*/}

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
