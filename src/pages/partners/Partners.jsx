import React from 'react'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/navbar/Topbar'
import "./partners.css"
const Partners = () => {
    return (
        <>
            <Topbar />
            <div className="partnerContainer">
                <ul className="pIcons">
                    <li className="pIcon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OracleLogo.png" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.svg.png" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://assets.intersystems.com/dims4/default/b4f6c99/2147483647/strip/false/crop/750x422+15+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://www.howtogeek.com/wp-content/uploads/2020/11/Google-Pay-hero.png?height=200p&trim=2,2,2,2&crop=16:9" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297-300x297.jpg" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://cdn.worldvectorlogo.com/logos/tesla-motors.svg" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" className='pImg' alt="" />
                    </li>
                    <li className="pIcon">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/1023px-BBC_News.svg.png" className='pImg' alt="" />
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Partners