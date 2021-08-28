import React from 'react'
import './Header.css'
import linkedin from '../icons/linkedin.svg'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
const profilePic = "https://media-exp1.licdn.com/dms/image/C4D03AQFOFueu7hI9Wg/profile-displayphoto-shrink_200_200/0/1622998714896?e=1635379200&v=beta&t=onOUM0aBluDa5VEyAaYUtgw4IuYkH4etq4CJv1xYhoM"
function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <img src={linkedin} className="App-logo" alt="logo" />
                <div className="header__search">
                    {/**searchicon */}
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={profilePic} title="Me" />
            </div>
        </div>
    )
}

export default Header
