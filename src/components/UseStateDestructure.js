import {Link} from 'react-router-dom';
import example from '../examples/arrayDestructuring.png';

const UseStateDestructure = () => {

  return (
    <div>
      <h1>useState</h1>
      <img id="useState-destructure-pic" src={example} className="destructuring-pic" alt="array-destructuring pic" />
      <nav>
        <Link to="/NewComponent" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseStateButton" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseStateDestructure;