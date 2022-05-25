import Topbar from "../../components/topbar/Topbar";
import LeftBar from "../../components/leftbar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css"


function Home() {
    return ( 
        <>
           <Topbar />
           <div className="container">
           <LeftBar />
           <Feed />
           <RightBar />
           </div>

        </>
     );
}

export default Home;

