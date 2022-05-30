import Topbar from "../../components/topbar/Topbar";
import LeftbarItem from "../../components/leftbar/shortcuts/LeftbarItem";
import Share from "../../components/feed/Share";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css"
import FriendItem from "../../components/leftbar/friends/FriendItem";
import Button from "../../components/button/Button"

function Home() {
    return ( 
        <>
         <Topbar className="topBar"/>
         <div className="container">
         <div className="leftBar">
            <LeftbarItem /> 
            <Button className="leftBarBtn" text="Show More" />
            <hr className="leftBarHr"/>
            <FriendItem />
         </div>   
            <Share />
            <RightBar />
         </div>

        </>
     );
}

export default Home;

