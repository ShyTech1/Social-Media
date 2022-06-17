import React from 'react';
import Share from './Share';
import Post from './Post';
import "./feed.css";

export default function Feed() {
  return (
    <div className='feedContainer'>
        <div className="share"><Share /></div>
        <div className="post"><Post /></div>
    </div>
  )
}
