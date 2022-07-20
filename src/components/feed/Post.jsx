import React from 'react';
import "./post.css";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';


export default function Posts() {
  return (
    <div className='postContainer'>
      <div className="friendDetails">
        <img src="../assets/person/2.jpg" alt="" className="userProfilePic" />
        <div className='postUserNameContainer'>
        <span className="userName">Jepfery kabor</span>
        <sapn className="postDate">posted 2 min ago</sapn>
        </div>
      </div>
      <div className="postContent">Hey, i'm back now from Paris. Finally</div>
      <hr />
      <div className="postReactions">
        <span className="likeBtn"> <CommentIcon />Like</span>
        <span className="commentBtn"><ThumbUpIcon /> Comment</span>
        <span className="ShareBtn"><ShareIcon /> Share</span>

      </div>

    </div>
  )
}



