import {Link} from 'react-router-dom';
import example from '../examples/ComponentLifeCycle.png'
import example2 from '../examples/UseEffectCyclePic.png';

const UseEffectIntro = () => {
  return (
    <div>
      <h1 id="useEffect-title">useEffect</h1>
      <p id="component-div">
        - Performs side effects interacting with component lifecycle methods<br></br> 
           in function components.<br></br>
        - Combines lifecycle methods into one seamless hook for more intuitive code.<br></br>
        - Common side effects include fetching data, setting up a subscripion, <br></br>
        closing a subscription.<br></br>

        </p>
      <img id="lifecycle-methods-img" src={example} className="UseStateButtonExample" alt="Component lifecycle example" />
      <img id="useEffect-cycle-img" src={example2} className="UseStateButtonExample" alt="useEffect example" />
      <nav>
        <Link to="/UseStateType" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseEffectCompare" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseEffectIntro;