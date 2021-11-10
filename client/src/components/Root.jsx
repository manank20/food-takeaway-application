import React,{useState} from "react";
import App from "./App"
function Root(){
    const [accessToken, setAccessToken] = useState('');
    function applyAccessToken(value) {
        setAccessToken("Bearer "+value);
    }
    return (
        <App accessToken = {accessToken} applyAccessToken={applyAccessToken} />
    )
}

export default Root;