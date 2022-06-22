import React from 'react';
import "./post.css";

export default function Posts() {
  return (
    <div className='postContainer'>
      <div className="friendDetails">
        <span className="userName">Jepfery kabor</span>
        <sapn className="postDate">posted 2 min ago</sapn>
      </div>
        <img src="../assets/person/2.jpg" alt="" className="userProfilePic" />
    </div>
  )
}
