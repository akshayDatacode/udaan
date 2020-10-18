import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../../user/component/Login";

const AuthRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </>
  );
};

export default AuthRoutes;
