import {Link} from 'react-router-dom';

import example from '../examples/ClassConstructor.png'

const OldComponent = () => {

  return (
    <div>
      <h1>Class "Stateful" Components</h1>
      <p id="component-div">
       - More boilerplate.<br></br>
       - Often confusing for engineers.<br></br>
       - "this" can become a headache.<br></br>
       - Render props and higher-order components can cause "wrapper hell".<br></br>
      </p>
      <img id="old-component-pic" src={example} alt="Example of react class component." />
      <nav>
        <Link to="/Intro" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/WrapperHell" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default OldComponent;