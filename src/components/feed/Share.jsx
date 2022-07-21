import "./share.css"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from "../button/Button";

export default function Share() {
  return (

      <div className="ShareContainer">
        <div className="shareInputContainer">
          <img className="shareProfilePic" src="./assets/person/a.jpg" alt="profilepic" />
          <input className="shareInput" type="text" placeholder="What on your mind ?" />
        </div>
        <hr className="shareHr"/>
          <ul className="shareItemsUl">
            <li className="shareItemsLi"> <PhotoLibraryIcon className="PhotoLibraryIcon"/> <span className="shareitemLiText">Photos\Videos</span> </li>
            <li className="shareItemsLi"><LabelIcon className="LabelIcon"/><span className="shareitemLiText">Tag</span>  </li>
            <li className="shareItemsLi"><LocationOnIcon className="LocationOnIcon"/><span className="shareitemLiText">Location</span> </li>
            <li className="shareItemsLi"><SentimentVerySatisfiedIcon className="SentimentVerySatisfiedIcon"/><span className="shareitemLiText">Feelings</span> </li>
           <Button className="shareBtn" text="Share" />
          </ul>
          
      </div>

  )
}
