import {Link} from 'react-router-dom';

const ComponentName = () => {

  return (
    <div>
      <nav>
        <Link to="/" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default ComponentName;