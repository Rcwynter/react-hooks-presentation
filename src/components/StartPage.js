import { Link } from 'react-router-dom';

import hooks from '../examples/react_hooks_logo.png';


const StartPage = () => {
  return (
    <div>
      <div className="title">
        <div id='inner'>
      <h1 id="main-title">React Hooks</h1>
      <h2 id="byline">A Presentation by Roland Wynter</h2>
      </div>
      {/* <img id="react-hooks-logo" src={hooks} alt="React hooks logo"></img> */}
      </div>
      <nav>
        <Link to="/" className="previous">
        <span>Previous Page</span>
        </Link>
        <Link to="/Intro" className="next-solo">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default StartPage;