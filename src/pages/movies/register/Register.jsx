import { Language } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./register.scss"
import axios from 'axios'

const Register = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleClick = async () => {
        console.log('singup clicked.');
        const response = await axios.post(`${process.env.REACT_APP_SERVER_API_KEY}/auth/signup`, {
            "username": username,
            "name": name,
            "password": password
        });

        if (response.status === 200) {
            const data = response.data;
            console.log(data);
            window.localStorage.setItem('name', data.data.name);
            navigate('/JMedia/movie/home');
        } else {
            setMessage(response.data.message);
        }
    }
    return (
        <div className='login'>
            <div className="topbar">

                <h1 className="logo">JMedia+</h1>
            </div>
            <div className="card movie">
                <div className="title movie">Sign In</div>
                <h2>{message} </h2>
                <input type="text" className='movie' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input type="text" className='movie' onChange={(e) => setName(e.target.value)} placeholder='Name' />
                <input type="password" className='movie' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <button className='buttonSubmit' onClick={handleClick}>Sign Up</button>
                <div className="help">
                    <div className="wrapper">
                        <input type="checkbox" autoComplete='true' />
                        <span>Remember me</span>
                    </div>
                    <span>Need help ?</span>
                </div>
                <div className="bottom movie">
                    <div className="first">
                        <h2>New to JMedia?</h2>
                        <span className='signUpmovie'><Link className='link' to="/Jmedia/login"> Login?</Link></span>

                    </div>
                    <div className="second">
                        <h3>This page is protected by Google reCAPTCHA to ensure you're not a bot.</h3>
                        <span>Learn more.</span>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h1>Questions? Call 000-800-919-1694</h1>
                <div className="info">
                    <ul className="left">
                        <li>FAQ</li>
                        <li>Cookies Preferences</li>

                    </ul>

                    <ul id='second'>
                        <li>Help Centre</li>
                        <li>Corporation Information</li>
                    </ul>

                    <ul id='third'>
                        <li>Terms of Use</li>
                    </ul>
                    <ul className="right">
                        <li>Privacy</li>
                    </ul>
                </div>

                <div className="select" >
                    <Language />
                    <select>English
                        <option>English</option>
                        <option value="Hindi">Hindi</option></select>

                </div>

                <div className="bottomLine">
                    <h2>JMedia+</h2>
                    <h3>All Rights Reserved ® JMedia Corporation</h3>
                </div>

            </div>
        </div>
    )
}

export default Register