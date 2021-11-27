import React,{useState} from "react";
import App from "./App"
function Root(){
    function applyAccessToken(value) {
        localStorage.setItem('token',"Bearer "+value);
    }
    return (
        <App  applyAccessToken={applyAccessToken} />
    )
}

export default Root;