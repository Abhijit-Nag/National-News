import { ChatSharp, Notifications, Person, Search } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import "./topbar.css";
const Topbar = ({ setQuery }) => {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <Link className='link' to={`/`}><span className="logo">JMedia Corp.</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input type="text" className="searchInput"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search for news!!!!' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link className='link' to={`/JMedia/crypto`}><span className="topbarLink">Crypto</span></Link>
                    <Link className='link' to={`/JMedia`}><span className="topbarLink special">JMedia+</span></Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatSharp />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="https://i.pinimg.com/736x/4c/e9/c4/4ce9c48dfc7e0164a0a4b708e755f6de.jpg" alt="" className='topbarImg' />
                <Menu />
            </div>
        </div>
    )
}

export default Topbar