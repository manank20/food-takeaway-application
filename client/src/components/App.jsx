import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes"
import axios from "axios";
// axios.defaults.withCredentials = true;

function App(props) {

    const [loggedIn, setLoggedIn] = useState();
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

            }).catch(function (err) {
                console.log(err);
                setLoggedIn(false);
            })
    }
    if (load) {

        return (
            <AppRoutes authenticated={authenticated} loggedIn={loggedIn} applyAccessToken={props.applyAccessToken} accessToken={props.accessToken} />
        );
    } else {
        return <h1>Loading...</h1>
    }
}

export default App;
