import {Link} from 'react-router-dom';

import example from '../examples/WrapperHell.png';

const WrapperHell = () => {

  return (
    <div>
      <h1>"Wrapper Hell"</h1>
      <img id="wrapper-hell-pic" src={example} alt="Wrapper hell of nested components."></img>
      <nav>
        <Link to="/OldComponent" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/NewComponent" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default WrapperHell;