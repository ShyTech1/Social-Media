import "./share.css"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from "../button/Button";

export default function Share() {
  return (

      <div className="Sharecontainer">
        <div className="share">
          <img className="shareProfilePic" src="../assets/person/1.jpg" alt="profilepic" />
          <input type="text" placeholder="What on your mind ?" />
          
        </div>
          <ul className="shareItems">
            <li> <PhotoLibraryIcon />Photos and Videos</li>
            <li><LabelIcon /> Tag</li>
            <li><LocationOnIcon />Location</li>
            <li><SentimentVerySatisfiedIcon />Feelings</li>
           
          </ul>
          <Button className="shareBtn" text="Share" />
      </div>

  )
}
