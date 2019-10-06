import React from "react";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import App from './App'
const Pagenotfoud = () => {
  return (
    <div>
      page not found<NavLink to="/"> Go Home</NavLink>{" "}
    </div>
  );
};
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route component={Pagenotfoud} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
