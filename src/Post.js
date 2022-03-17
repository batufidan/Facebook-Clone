import React from 'react'
import './Post.css'
import {Avatar } from "@material-ui/core"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-topInfo">
          <h3>{username} </h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post-bottom">
        <p>{message}</p>
      </div>

      <div className="post-image">
        <img src={image} alt="" />
      </div>

      <div className="post-options">
        <div className="post-option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post-option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;