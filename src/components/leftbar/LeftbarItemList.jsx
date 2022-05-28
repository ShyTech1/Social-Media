import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import LeftbarItem from "./LeftbarItem";
import "./LeftbarItemList.css"

function LeftbarItemList(){
    return(
        <div className='LeftbarItem'>
            <LeftbarItem />
            <button className='showmore'>Show More</button>
            <hr className='separator'/>
        </div>
    )
}

export default LeftbarItemList;