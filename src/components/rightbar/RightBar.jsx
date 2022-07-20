import "./rightbar.css";

export default function rightBar() {
  return (
    <div className="rightBarContainer">
      <div className="rightBarUpdates"> 
        <img src="./assets/gift.png" alt="" className="rightBarUpdatesImg" />
        <p className="rightBarUpdatesText"><b>Tedi Bear</b> and <b>2 other friends </b>have a birthday today </p>      
      </div>
      <div className="rightBatAd">
        <img src="./assets/ad.jfif" alt="AD" className="rightBarAdImg" />
      </div>
      <div className="rightBarOnlineFriends">
        <span className="rightBaronlineFreindsTitle">Online Friends</span>
        <div className="rightBarOnlineFriendsList">
          <div className="rightBarOnlineFriendsImgWrapper"><img src="../assets/person/7.jpg" alt="" className="rightBarOnlineFriendsImg" /></div>
          <span className="rightBarOnlineFriendsName">Jonny Walker</span>
        </div>
      </div>
    </div>
  )
}
