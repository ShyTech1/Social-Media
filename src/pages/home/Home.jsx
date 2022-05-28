import Topbar from "../../components/topbar/Topbar";
import LeftbarItemList from "../../components/leftbar/LeftbarItemList";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css"


function Home() {
    return ( 
        <>
           <Topbar />
           <div className="container">
           <LeftbarItemList /> 
           <Feed />
           <RightBar />
           </div>

        </>
     );
}

export default Home;

