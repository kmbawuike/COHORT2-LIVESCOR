import React from "react";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import App from './App'
import About from './contact'
import Contact from './about'
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
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Pagenotfoud} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
