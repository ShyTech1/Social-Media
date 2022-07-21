import Topbar from "../../components/topbar/Topbar";
import LeftbarItem from "../../components/leftbar/shortcuts/LeftbarItem";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css"
import FriendItem from "../../components/leftbar/friends/FriendItem";
import Button from "../../components/button/Button";
import Feed from "../../components/feed/Feed";

function Home() {
    return ( 
        <>
         <Topbar className="topBar"/>
         <div className="bodyContainer">
            <div className="leftBarContainer">
               <LeftbarItem /> 
               <Button className="leftBarBtn" text="Show More" />
               <hr className="leftBarHr"/>
               <FriendItem />
            </div>   
               <Feed  />
               <RightBar />
            </div>

        </>
     );
}

export default Home;

