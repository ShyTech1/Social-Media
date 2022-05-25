import "./leftbar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';




export default function LedtBar() {
  return (
    <div className="leftBar">
        <div className="topContainer">
        <ul className="items">
            <li className="sidebarListItemText"><RssFeedIcon className="icon"/>Feed</li>
            <li className="sidebarListItemText"><ChatIcon className="icon"/>Chats</li>
            <li className="sidebarListItemText"><OndemandVideoIcon className="icon"/>Videos</li>
            <li className="sidebarListItemText"><GroupIcon className="icon"/>Groups</li>
            <li className="sidebarListItemText"><BookmarksIcon className="icon"/>Bookmarks</li>
            <li className="sidebarListItemText"><HelpOutlineIcon className="icon"/>Qusetions</li>
            <li className="sidebarListItemText"><WorkOutlineIcon className="icon"/>Jobs</li>
            <li className="sidebarListItemText"><EventIcon className="icon"/>Events</li>
            <li className="sidebarListItemText"><SchoolIcon className="icon"/>Courses</li>
        </ul>
        <button className="showMore">Show More</button>
    </div>
        
    </div>
  )
}
