import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../home_page";
import Home from "../../home_page/Home";
import Dashboard from "../../dashboard/components/Dashboard";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home_page" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

export default AppRoutes;
