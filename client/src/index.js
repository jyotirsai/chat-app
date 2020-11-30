import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain="dev-wrn2km4u.us.auth0.com"
      clientId="xIcyyLdiy183NWi1VU258NjglDsc6z75"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);
