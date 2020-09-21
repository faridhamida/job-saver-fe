const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "0oaue6cusIYlj75iS4x6";
const ISSUER =
  process.env.REACT_APP_ISSUER || "https://dev-452202.okta.com/oauth2/default";

export default {
  oidc: {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: window.location.origin + "/implicit/callback",
    pkce: true,
    scopes: ["openid", "profile", "email"]
  }
};

