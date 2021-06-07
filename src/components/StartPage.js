import { Link } from 'react-router-dom';


const StartPage = () => {
  return (
    <div>
      <h1>Start Page</h1>
      <h1>React Hooks</h1>
      <Link to="/UseStateButton">
        <h5>Next Page</h5>
      </Link>
    </div>
  )
}

export default StartPage;