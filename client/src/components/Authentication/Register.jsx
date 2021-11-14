import axios from "axios";
import React,{ useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
    const [form, setForm] = useState({
        name:'',
        username:'',
        password:''
    })

    function handleChange(event){
        const {name,value} = event.target
        setForm(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]:value
                }
            )
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(form);
        axios.post("http://localhost:8080/api/user/save",form,{
            withCredentials: true
        })
        .then(function(res){
            console.log(res);
            props.registered(true);
        }).catch(e => {
            console.error(e);
        })
        
    }
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo authenticate-logo">foodizone</div>
            </Link>
            <div className="login-form">
                <form className="login-form-form" onSubmit={handleSubmit}>
                    <p className="login-form-creds">Name</p>
                    <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} className="login-form-input" />

                    <p className="login-form-creds">Email (username)</p>
                    <input type="email" name="username" placeholder="example@example.com" onChange={handleChange} className="login-form-input" />

                    <p className="login-form-creds">Password</p>
                    <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} className="login-form-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />

                    <p className="login-form-creds">Contact no.</p>
                    <input type="tel" name="contact" placeholder="Enter Phone" className="login-form-input" />

                    <button type="submit" className="login-form-submit">Sign up</button>
                    <p className="register-link"> Existing User? <Link to="/authenticate" style={{ textDecoration: 'none' }}> Log in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;