import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../config/firebase'

function Feed() {
    const [posts, setposts] = useState([])

    // useEffect(() => {
    // }, [])

    const onPostClick = (e) => {
        e.preventDefault()
        console.log(db)
        // db.collection('posts').add({
        //     name: 'Rohan',
        //     description: 'Nothing',
        // })
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit" onClick={onPostClick}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#34b1eb" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#34eb68" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#ed9b37" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#eb31e1" />
                </div>
            </div>
            {posts.map(post => {
            })}
            <Post name="Rohan Padariya" message="Selected in Google.." description="This is test" photoUrl="" />
            <Post name="Rohan Padariya" message="Selected in Google.." description="This is test" photoUrl="" />
        </div>
    )
}

export default Feed
