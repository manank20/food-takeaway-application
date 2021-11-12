import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes"
import axios from "axios";

function App(props) {

    const [loggedIn, setLoggedIn] = useState();
    const [registerNow,setRegisterNow]= useState(false);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8080/api/authenticate', {
            headers: {
                Authorization: props.accessToken
            }
        })
            .then(function (response) {
                setLoggedIn(response.data)
                setLoad(true);

            }).catch(function (err) {
                console.log(err);
                setLoggedIn(false);
                setLoad(true)
            })
    }, [props.accessToken])
    function authenticated(value) {
        axios.get('http://localhost:8080/api/authenticate', {
            headers: {
                Authorization: props.accessToken
            }
        })
            .then(function (response) {
                setLoggedIn(response.data)
                registered(false);

            }).catch(function (err) {
                console.log(err);
                setLoggedIn(false);
            })
    }
    function registered(value){
        setRegisterNow(value);
    }
    if (load) {

        return (
            <AppRoutes registered={registered} registerNow={registerNow} authenticated={authenticated} loggedIn={loggedIn} applyAccessToken={props.applyAccessToken} accessToken={props.accessToken} />
        );
    } else {
        return <h1>Loading...</h1>
    }
}

export default App;
