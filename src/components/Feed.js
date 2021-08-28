import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainder">
                <div className="feed_input">
                    <CreateIcon />
                </div>
            </div>
        </div>
    )
}

export default Feed
