import "./feed.css"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export default function Feed() {
  return (
    <div className="Feed">
      <div className="shareContainer">
        <div className="share">
          <img src="/assets/person/1.jpg" alt="" className="shareprofilePic" />
          <input type="text" placeholder="Wha't on your mind Dude?" className="shareInput"/>
        </div>
        <div className="shareoptions">
          <ul className="shareItemslist">
            <li className="shareitem"><PhotoLibraryIcon/> Photos or videos</li>
            <li className="shareitem"><LabelIcon/> Tag</li>
            <li className="shareitem"><LocationOnIcon/> Location</li>
            <li className="shareitem"><SentimentVerySatisfiedIcon/>Feelings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
