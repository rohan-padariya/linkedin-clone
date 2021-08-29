import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../config/firebase'
import firebase from 'firebase/compat/app';

import { selectUser } from '../features/user/userSlice'
import { useSelector } from 'react-redux'

import FlipMove from 'react-flip-move';

function Feed() {
    const [input, setinput] = useState('')
    const [posts, setposts] = useState([])

    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("posts").onSnapshot(sanpshot => {
            setposts(sanpshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, [])

    const onPostClick = (e) => {
        e.preventDefault()
        // console.log(db)
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || " ",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setinput('')
        console.log(posts)
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder="Start a Post" value={input} onChange={e => setinput(e.target.value)} />
                        <button type="submit" onClick={onPostClick}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="gray" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="gray" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="gray" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="gray" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
                    <Post key={id} name={name} message={message} description={description} photoUrl={photoUrl ? photoUrl : ""} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
