import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../../user/component/Login";
import Signup from "../../user/component/Signup";

const AuthRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
};

export default AuthRoutes;
