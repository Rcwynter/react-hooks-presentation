import {Link} from 'react-router-dom';
import wallpaper from '../examples/ProperTechTalkSlide.png';

const TechTalk = () => {

  return (
    <div>
      <img id="tech-talk" src={wallpaper} alt="Codesmith & singlesprout tech talks."></img>
      <nav>
        <Link to="/Title" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default TechTalk;