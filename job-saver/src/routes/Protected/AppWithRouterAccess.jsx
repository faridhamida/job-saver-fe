import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import config from '../../utils/config';
import HomePage from '../HomePage';
import LoginForm from "../Authentication/LoginForm";
import Dashboard from "./dashboard";
import Navigation from "../Navigation";



const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/");
  };


  return (
    <Security
      {...config.oidc}
      onAuthRequired={onAuthRequired}
    >
      <div id="content" style={{overflowX:"scroll"}}>
        <Navigation />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/implicit/callback" component={LoginCallback} />
        <Route exact path="/login" component={LoginForm} />
        <SecureRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Security>
  );
};
export default AppWithRouterAccess;