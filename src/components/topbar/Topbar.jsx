import "./topbar.css";
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


export default function Topbar() {
  return (
    <div className="topBarContainer">

        <div className="topBarLeft">
            <span className="appLogo"> <GroupsIcon /></span>
            <span className="appTitle">SocialMedia</span>
        </div>

        <div className="topBarCenter">
            <div className="searchBox">
                <SearchIcon className="searchIcon"/>
                <input placeholder="What's on your mind?" className="searchInput" />
            </div>
        </div>

        <div className="topBarRight">
            <div className="topBarlinks">
                <span className="homePageLink">Home page</span>
                <span className="timelineLink">Timeline</span>
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
            <div className="topBarProfilePic">
                <img className="profilePic" src="../assets/person/1.jpg" alt="image" />
                <img className="profilePic" src="./assets/person/2.jpg" alt="image" />
            </div>
        </div>

    </div>
  )
}
