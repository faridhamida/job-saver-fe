import React from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import Navigation from "./Navigation";
function HomePage(){
    return (
        <div>
        <Navigation />
        <HomeHeader />
        <HomeBody />
        </div>
    );
}

export default HomePage;