import "./topbar.css";
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import "1.jpg" from "./public/assetst/person";

export default function Topbar() {
  return (
    <div className="topBarContainer">

        <div className="topBarLeft">
            <span className="appLogo"> <GroupsIcon /></span>
            <span className="title">SocialMedia</span>
        </div>

        <div className="topBarCenter"></div>
            <div className="searchBox">
                <div className="searchBoxIcon"> <SearchIcon /></div>
                <input placeholder="What's on your mind?" className="searchinput" />
            </div>

        <div className="topBarRight">
            <div className="links">
                <span className="homePageLink">Home page</span>
                <span className="timelineLinl">Timeline</span>
            </div>

            <div className="topBarIcons">
                <div className="iconItemFriends">
                    <PersonIcon />
                    <span className="icoBbadge">1</span>  
                </div>

                <div className="iconItemChat">
                    <div className="iconItemChat">
                    <ChatIcon />
                    <span className="icoBbadge">3</span>  
                </div>
            </div>
                <div className="iconItemNotification">
                    <div className="iconItemNotification">
                        <NotificationsNoneIcon />
                        <span className="icoBbadge">1</span>  
                    </div>
                </div>
            </div>
            <div className="topBarprofilepic">

            </div>
        </div>

    </div>
  )
}
