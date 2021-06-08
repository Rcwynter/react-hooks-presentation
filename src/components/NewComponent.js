import {Link} from 'react-router-dom';

import example from '../examples/UseStateButtonPic.png';

const NewComponent = () => {

  return (
    <div>
      <h1>Function Components</h1>
      <p id="component-div">
      - No longer a strict division between "stateful" and "stateless" components.<br></br>
      - Components can be written simply as normal functions or in arrow syntax.<br></br>
      - "this" is no longer necessary.<br></br>
      - Class components have not been depricated.<br></br>
      </p>
      <img id="function-component-img" src={example} alt="Function react compoment"></img>
      <nav>
        <Link to="/WrapperHell" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseStateDestructure" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default NewComponent;