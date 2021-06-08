import {Link} from 'react-router-dom';

const UseRefIntro = () => {

  return (
    <div>
      <h1 id="end">Thanks!</h1>
      <nav>
        <Link to="/UseContextDemo" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseRefDemo" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseRefIntro;