import { Link } from 'react-router-dom';
import example from '../examples/UseStateButtonPic.png';

import { useState } from 'react';

const UseStateButton = () => {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>useState Button Page</h1>
      <p>Count = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br></br>
      <img src={example} className="UseStateButtonExample" alt="useState button example" />

      <Link to="/">
        <h5>Previous Page</h5>
      </Link>
      <Link to="/UseStateType">
        <h5>Next Page</h5>
      </Link>
    </div>
  )
}

export default UseStateButton;