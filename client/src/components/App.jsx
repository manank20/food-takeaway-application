import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes"
import axios from "axios";
// axios.defaults.withCredentials = true;

function App() {

    const [loggedIn, setLoggedIn] = useState();
    const [accessToken, setAccessToken] = useState('');
    const [load, setLoad] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8080/api/authenticate',{
            headers : {
                Authorization:accessToken
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
    }, [accessToken])
    function authenticated(value) {
        setLoggedIn(value);
    }
    function applyAccessToken(value) {
        setAccessToken("Bearer "+value);
    }
    if (load) {

        return (
            <AppRoutes authenticated={authenticated} loggedIn={loggedIn} applyAccessToken = {applyAccessToken} accessToken={accessToken}/>

        );
    } else {
        return <h1>Loading...</h1>
    }
}

export default App;
