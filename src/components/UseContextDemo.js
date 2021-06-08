import demo from '../examples/UseContextDemo.png';
import appDemo from '../examples/UseContextApp.png';


import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import {UserContext} from '../App.js';

const UseContextDemo = () => {
  const [showing, setShowing] = useState(false);

  const data = useContext(UserContext);


  return (
    <div>
      <h1>useContext continued</h1>
      <div>
        <h1 id="useContext-showing">{showing === false ? null : data}</h1>
        <button id="useContext-button" onClick={() => setShowing(true)}>useContext</button>
      </div>
      <img id="useContext-app" src={appDemo} alt="useContext example"></img>
      <img id="useContext-demo" src={demo} alt="useContext example"></img>
      <nav>
        <Link to="/UseContextIntro" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseRefIntro" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseContextDemo;