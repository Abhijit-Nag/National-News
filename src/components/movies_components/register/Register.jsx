import { Language } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
    const [clicked, setClicked] = useState(false);
    const handlClick = () => {
        setClicked(true);
        console.log(clicked);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="logo">JMedia+</div>
                <div className="wrapper">
                    <div className="select" onClick={handlClick}>
                        <Language />
                        <select>English
                            <option>English</option>
                            <option value="Hindi">Hindi</option></select>
                    </div>
                    <button className="loginButton movie"><Link className="link" to="/JMedia/login" > Sign In</Link></button>
                </div>

            </div>
            <div className="container">
                <h1 className="movieh1">Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="input">
                    <input type="email" placeholder="Email address" />
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Register