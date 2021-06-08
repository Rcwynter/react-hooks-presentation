import { Link } from 'react-router-dom';
import example from '../examples/UseStateButtonPic.png';

import { useState } from 'react';

const UseStateButton = () => {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>useState continued</h1>
      <div id="button-div">
        <p id="clicked">You clicked <span id="count">{count}</span> times</p>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <br></br>
      <img id="useState-button-pic" src={example} className="UseStateButtonExample" alt="useState button example" />
      <nav>
        <Link to="/UseStateDestructure" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseStateType" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseStateButton;