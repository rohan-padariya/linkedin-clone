import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'
import { selectUser } from '../features/user/userSlice'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <div className="sidebar__hash">#</div>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1629824503846-b864fe03b3be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl} > {user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>
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
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('MLOps')}
                {recentItem('interviewtips')}
                {recentItem('Node.js')}
                {recentItem('nowhiring')}
            </div>
        </div>
    )
}

export default Sidebar
