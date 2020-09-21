import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import config from "../../utils/config";
import logo from "../../images/jobsaverlogo.png";

const LoginForm = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;

    const widget = new OktaSignIn({
      baseUrl: process.env.REACT_APP_BASEURL,
      clientId ,
      redirectUri,
      language: "en",
      logo: logo,
      brandName: "Job-Saver",
      // Overrides default text when using English.
      i18n: {
        en: {
          "primaryauth.title": "Please Sign in to your Job-Saver Account"
        }
      },
      // Changes to widget functionality
      authParams: {
        pkce,
        issuer,
        display: "page",
        scopes,
        responseMode: "query"
      },
      features: {
        registration: true, // Enable self-service registration flow
        selfServiceUnlock: true, // Will enable unlock in addition to forgotten password
        smsRecovery: true, // Enable SMS-based account recovery
        callRecovery: true, // Enable voice call-based account recovery
        showPasswordToggleOnSignInPage: true
      },
      idps: [
        { type: "google", id: process.env.REACT_APP_GOOGLE_IPD_ID }
      ],
      colors: {
        brand: "#FF5757"
      }
    });

    widget.renderEl(
      { el: "#sign-in-widget" },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
    return () => {
      widget.remove();
    };
  }, []);

  return (
    <div>
      <div
        style={{
          background: "#F3F8F9",
          height: "100%",
          paddingTop: "20px",
          paddingBottom: "20px"
        }}
        id="sign-in-widget"
      />
    </div>
  );
};
export default LoginForm;