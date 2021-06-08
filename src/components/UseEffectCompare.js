import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import example from "../examples/LifecycleFunction.png"

const UseEffectCompare = () => {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(null);
  const [didMount, setDidMount] = useState(null)

  useEffect(() => {
    setDidMount('componentDidMount');
    setTimeout(() => setDidMount(null), 4000);
  }, [])

  useEffect(() => {
    setMount('componentDidUpdate');
    setTimeout(() => setMount(null), 800);
  }, [count])

  useEffect(() => {
    return () => alert('componentWillUnmount')
  }, [])



  return (
    <div>
      <h1>useEffect and Component Lifecycles</h1>
      <div id="lifecycle-div">
        <p>{didMount !== null ? didMount : null}</p>
        <p>{mount !== null ? mount : null}</p>
      </div>
      <div id="lifecycle-button-div">
        <p id="lifecycle-count">Count = {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(0)}>Clear Count</button>
      </div>
      
      <br></br>
      <img id="lifecycle-img" src={example} className="UseStateButtonExample" alt="useState button example" />
      <nav>
        <Link to="/UseEffectIntro" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseContextIntro" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseEffectCompare;