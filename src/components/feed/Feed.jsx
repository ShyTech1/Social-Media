import React from 'react';
import Share from './Share';
import Posts from './Post';
import "./feed.css";

export default function Feed() {
  return (
    <div className='feedContainer'>
        <div className="shareInFeed"><Share /></div>
        <div className="postInFeed"><Posts /></div>
    </div>
  )
}
