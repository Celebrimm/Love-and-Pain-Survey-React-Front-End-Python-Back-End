import React, { Component } from "react";
import History from "../services/History";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LoveAndPain from "../pages/LoveAndPain.js";
import Pain from "../pages/Pain.js";
import Home from "../pages/Home";
import Results from "../pages/Results.js";

export default class Routes extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route path="/home" component={Home} exact />
          <Route path="/pain" component={Pain} exact />
          <Route path="/love-and-pain" component={LoveAndPain} exact />
          <Route path="/results" component={Results} exact />
        </Switch>
      </Router>
    );
  }
}
