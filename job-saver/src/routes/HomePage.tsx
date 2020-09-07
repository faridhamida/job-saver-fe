import React from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useOktaAuth } from "@okta/okta-react";
import { Redirect } from "react-router-dom";

function HomePage() {
    const { authState } = useOktaAuth();

    const HomePageBody = () => {
    return (
        <div>
          <HomeHeader />
          <HomeBody />
          <Footer />
        </div>
    );
}

return (
    <div>
      {!authState.isAuthenticated ? (
        <div>
          <HomePageBody />
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </div>
  );
}

export default HomePage;