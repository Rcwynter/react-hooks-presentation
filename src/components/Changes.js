import {Link} from 'react-router-dom'

const Changes = () => {
  return (
    <div>
      <h1>Changes to React 16.8</h1>
      <p className="bullet-points">

      </p>
      <nav>
        <Link to="/Intro" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/OldComponent" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default Changes;