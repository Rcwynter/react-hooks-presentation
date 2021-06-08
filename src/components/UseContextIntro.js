import {Link} from 'react-router-dom';

const UseContextIntro = () => {

  return (
    <div>
      <h1>useContext</h1>
      <p id="component-d">
        - Persists state between distant components without passing state through props.<br></br>
        - All components transferring state must be wrapped in {"<UserContext.Provider>"}.<br></br>
        - useContext only allows children to subscribe to context changes. Context<br></br>
        value must be passed top-down from {"<UserContext.Provider>"}.

      </p>
      <nav>
        <Link to="/UseEffectCompare" className="previous">
          <span>Previous Page</span>
        </Link>
        <Link to="/UseContextDemo" className="next">
          <span>Next Page</span>
        </Link>
      </nav>
    </div>
  )
}

export default UseContextIntro;