import React from "react";
import Navbar from "../Navbar"
import RestaurantList from "./RestaurantList";
import AccountIcon from "../AccountIcon";
import Footer from "../Footer/Footer"

function Home(props) {
    return (

        <div>
            <Navbar searchDisplay={true} accessToken={props.accessToken}/>
            <AccountIcon />
            <RestaurantList accessToken = {props.accessToken}/>
            <Footer />

        </div>
    );
}

export default Home;