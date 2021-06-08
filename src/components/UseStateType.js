import { Link } from 'react-router-dom';
import example from '../examples/UseStateTypePic.png';

import { useState } from 'react';

const UseStateType = () => {
  const [input, setInput] = useState('');


  return (
    <div>
      <h1>useState continued</h1>
      <h2 id="invisible-text">{input}</h2>
      <input id="useState-input" type="text" value={input} placeholder="Type something here" onChange={(e) => setInput(e.target.value)}></input>
      <br></br>
      <img id="useStateType-pic" src={example} className="UseStateButtonExample" alt="useState text input example" />
      <nav>
        <Link to="/UseStateButton" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseEffectIntro" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseStateType;