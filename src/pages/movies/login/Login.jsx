import { Language } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.scss"
import axios from "axios"
import { signInWithGoogle } from '../../../firebaseConfig'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const handleClick = async () => {
        console.log('Sign in clicked..');
        const response = await axios.post(`${process.env.REACT_APP_SERVER_API_KEY}/auth/login`, {
            "username": username,
            "password": password
        });
        console.log(response.status);
        if (response.status === 200) {
            window.localStorage.setItem('name', response.data.data.name);
            navigate('/JMedia/movie/home');
        }
        else {
            setMessage(response.data.message);
        }
    }

    const handleGoogle = async () => {

        await signInWithGoogle();

        navigate('/JMedia/movie/home');




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
                <input type="password" className='movie' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/* <Link to={`/JMedia/movie/home`}></Link> */}
                    <button className='buttonSubmit' onClick={handleClick}>Sign In</button>
                    <div className="googleButton" onClick={handleGoogle} style={{ display: 'flex', height: 50, marginTop: 35, alignItems: 'center', marginRight: 15 }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" height={35} />
                        <button className='google' style={{ backgroundColor: 'transparent', color: 'white', border: "none", fontSize: 15, '&:hover': { backgroundColor: 'orange' } }}>Google</button>
                    </div>
                </div>
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
                        <span className='signUpmovie'><Link className='link' to="/JMedia/signup"> Sign up now.</Link></span>

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

export default Login