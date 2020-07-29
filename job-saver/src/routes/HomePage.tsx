import React from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import Navigation from "./Navigation";
import Footer from "./Footer";


function HomePage(){
    return (
        <div>
        <Navigation />
        <HomeHeader />
        <HomeBody />
        <Footer />
        </div>
    );
}

export default HomePage;