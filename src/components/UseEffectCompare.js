import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const UseEffectCompare = () => {
  return (
    <div>
      <h1>useEffect Comparision</h1>
      

      <Link to="/UseStateType">
        <h5>Previous Page</h5>
      </Link>
      <Link to="/UseEffectCompare">
        <h5>Next Page</h5>
      </Link>
    </div>
  )
}

export default UseEffectCompare;