import {Link} from 'react-router-dom';

const UseRefDemo = () => {

  return (
    <div>
      <h1>useRef Demo</h1>
      <nav>
        <Link to="/UseRefIntro" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseRefDemo" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseRefDemo;