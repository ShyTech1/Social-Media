import "./feed.css"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export default function Feed() {
  return (
    <>
      <div className="Feed">
        <div className="share">
          <img src="" alt="profilepic" />
          <input type="text" placeholder="What on your mind ?" />
        </div>
          <ul className="shareItems">
            <li> <PhotoLibraryIcon />Photos and Videos</li>
            <li><LabelIcon /> Tag</li>
            <li><LocationOnIcon />Location</li>
            <li><SentimentVerySatisfiedIcon />Feelings</li>
          <button > Share</button>

          </ul>
      </div>
    </>
  )
}
