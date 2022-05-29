import Topbar from "../../components/topbar/Topbar";
import LeftbarItem from "../../components/leftbar/shortcuts/LeftbarItem";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css"
import FriendItem from "../../components/leftbar/friends/FriendItem";
import Button from "../../components/button/Button"

function Home() {
    return ( 
        <>
         <Topbar />
         <div className="container">
         <div className="leftBar">
            <LeftbarItem /> 
            <FriendItem />
            <Button text="Show More" />
    

         </div>   
            <Feed />
            <RightBar />
         </div>

        </>
     );
}

export default Home;

