import {Link} from 'react-router-dom';

const Intro = () => {

  return (
    <div>
      <h1>Why React Hooks?</h1>
      <p className="why-react-hooks">
      Simplify the handling of state.<br></br>
      Remove the neccessity of class components.<br></br>
      Organize lifecycle functionality more logically.<br></br>
      Improve overall readability of code to prevent developer errors.<br></br>
      </p>

      <nav>
        <Link to="/Title" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/OldComponent" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default Intro;