import { Link } from 'react-router-dom';
import example from '../examples/UseStateTypePic.png';

import { useState } from 'react';

const UseStateType = () => {
  const [input, setInput] = useState('');


  return (
    <div>
      <h1>useStateType Page</h1>
      <h2>{input}</h2>
      <input type="text" value={input} placeholder="Type something here" onChange={(e) => setInput(e.target.value)}></input>
      <br></br>
      <img src={example} className="UseStateButtonExample" alt="useState text input example" />

      <Link to="/UseStateButton">
        <h5>Previous Page</h5>
      </Link>
      <Link to="/UseEffectCompare">
        <h5>Next Page</h5>
      </Link>
    </div>
  )
}

export default UseStateType;