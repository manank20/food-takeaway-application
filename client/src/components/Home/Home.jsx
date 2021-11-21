import React from "react";
import Navbar from "../Navbar"
import RestaurantList from "./RestaurantList";
import AccountIcon from "../AccountIcon";
import Footer from "../Footer/Footer"

function Home(props) {
    return (

        <div>
            <Navbar searchDisplay={true} authenticated={props.authenticated} applyAccessToken={props.applyAccessToken}/>
            <AccountIcon authenticated={props.authenticated} applyAccessToken={props.applyAccessToken}/>
            <RestaurantList />
            <Footer />

        </div>
    );
}

export default Home;