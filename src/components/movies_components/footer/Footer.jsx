import { Language } from '@material-ui/icons'
import React from 'react'
import "./footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Questions? Call 000-800-919-1694</h1>
            <div className="info">
                <ul className="left">
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>

                <ul id='second'>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookies Preferences</li>
                    <li>Legal Notices</li>
                </ul>

                <ul id='third'>
                    <li>Accounts</li>
                    <li>Ways to Watch</li>
                    <li>Corporation Information</li>
                    <li>Only on JMedia</li>
                </ul>
                <ul className="right">
                    <li>Media Centre</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="select" >
                <Language />
                <select>English
                    <option>English</option>
                    <option value="Hindi">Hindi</option></select>

            </div>

            <div className='bottomLine' >
                <h2>JMedia+</h2>
                <h3>All Rights Reserved ® JMedia Corporation</h3>
            </div>


        </div>
    )
}

export default Footer