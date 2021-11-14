import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"
import axios from "axios";
axios.defaults.withCredentials = true

function Login(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target
        setForm(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })
    }
    function convertToFormData(data) {
        var form_data = new FormData();
        for (var key in data) {
            form_data.append(key, data[key]);
        }
        return form_data;
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/", convertToFormData(form), {
            withCredentials: true
        })
            .then(function (response) {
                props.applyAccessToken(response.data.access_token);
                props.authenticated();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo authenticate-logo">foodizone</div>
            </Link>
            <div className="login-form">
                <form className="login-form-form" onSubmit={handleSubmit}>
                    <p className="login-form-creds">Username</p>
                    <input type="text" name="username" placeholder="example@example.com" className="login-form-input" onChange={handleChange} />

                    <p className="login-form-creds">Password</p>
                    <input type="password" name="password" placeholder="Enter Password" className="login-form-input" onChange={handleChange} />
                    <button type="submit" className="login-form-submit">Log in</button>

                    <p className="register-link"> New User? <Link to="/authenticate/register" style={{ textDecoration: 'none' }}> Sign up</Link></p>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;