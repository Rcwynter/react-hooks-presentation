import './App.css';
import UseStateButton from './components/UseStateButton';
import UseStateType from './components/UseStateType';
import StartPage from './components/StartPage';
import UseEffectCompare from './components/UseEffectCompare';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/UseStateButton" exact component={UseStateButton}/>
          <Route path="/UseStateType" exact component={UseStateType} />
          <Route path="/UseEffectCompare" exact component={UseEffectCompare} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
