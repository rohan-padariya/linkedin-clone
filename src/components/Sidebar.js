import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
const profilePic = "https://media-exp1.licdn.com/dms/image/C4D03AQFOFueu7hI9Wg/profile-displayphoto-shrink_200_200/0/1622998714896?e=1635379200&v=beta&t=onOUM0aBluDa5VEyAaYUtgw4IuYkH4etq4CJv1xYhoM"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1629824503846-b864fe03b3be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                <Avatar className="sidebar__avatar" src={profilePic} />
                <h2>Rohan Padariya</h2>
                <h4>Software Engineer</h4>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed your Profie</p>
                        <p className="sidebar_Number">1,242</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on your post</p>
                        <p className="sidebar_Number">2,242</p>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                Recent
            </div>
        </div>
    )
}

export default Sidebar
