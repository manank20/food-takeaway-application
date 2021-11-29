import React from "react";
import { useCallback, useState } from "react";
import Navbar from "../Navbar"
import RestaurantList from "./RestaurantList";
import AccountIcon from "../AccountIcon";


function Home(props) {
    const [search, setSearch] = useState("");

    const callback = useCallback((search) => {
        setSearch(search);
    }, []);

    return (

        <div>
            <Navbar parentCallback={callback} searchDisplay={true} authenticated={props.authenticated} applyAccessToken={props.applyAccessToken}/>
            <AccountIcon authenticated={props.authenticated} applyAccessToken={props.applyAccessToken}/>
            <RestaurantList search={search}/>
        </div>
    );
}

export default Home;