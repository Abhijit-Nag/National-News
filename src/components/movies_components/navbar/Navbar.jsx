import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./navbar.scss"

const Navbar = ({ setType }) => {
    const [scroll, setScroll] = useState(false);
    console.log(window.pageYOffset)
    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset === 0 ? setScroll(false) : setScroll(true);
        };
    }, [])

    const navigate = useNavigate();
    const handleClick = async () => {
        window.localStorage.clear();
        navigate('/');
    }

    console.log(scroll)
    return (
        <div className={scroll ? "navbar movies scroll" : "navbar movies"}>
            <div className="container movie">
                <div className="left movie">

                    <div className="logo movie">
                        JMedia+
                    </div>
                    <span onClick={() => setType("movie")}>Homepage</span>
                    <span onClick={() => setType("tv")}>Series</span>
                    <span onClick={() => setType("movie")}>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right movie">
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>Hi, &nbsp;&nbsp;</span>
                    <span style={{ fontSize: 18, fontWeight: 'bold' }}>{window.localStorage.getItem('name')} </span>
                    <Search className='icon movie' />
                    <span>KID</span>
                    <Notifications className='icon movie' />
                    <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" alt="" />
                    <div className="profile movie">
                        <ArrowDropDown className='icon movie' />
                        <div className="options movie">
                            <span>Settings</span>
                            <span onClick={handleClick} >Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar