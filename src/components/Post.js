import { Avatar } from '@material-ui/core'
import { MessageOutlined } from '@material-ui/icons'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'

const Post = forwardRef(({ id, name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post" id={id}>
            <div className="post__header">
                <Avatar src={photoUrl} />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={MessageOutlined} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
