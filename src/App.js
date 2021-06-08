import './App.css';
import UseStateButton from './components/UseStateButton';
import UseStateType from './components/UseStateType';
import StartPage from './components/StartPage';
import UseEffectCompare from './components/UseEffectCompare';
import Intro from './components/Intro';
import UseEffectIntro from './components/UseEffectIntro';
import Changes from './components/Changes';
import OldComponent from './components/OldComponent';
import NewComponent from './components/NewComponent';
import UseStateDestructure from './components/UseStateDestructure';
import UseContextIntro from './components/UseContextIntro';
import UseContextDemo from './components/UseContextDemo';
import UseRefIntro from './components/UseRefIntro';
import UseRefDemo from './components/UseRefDemo';
import WrapperHell from './components/WrapperHell';
import TechTalk from './components/TechTalk';




import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {createContext} from 'react';


export const UserContext = createContext(null);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <UserContext.Provider value="Hi from app.js :)">
            <Route path="/" exact component={TechTalk} />
            <Route path="/Title" exact component={StartPage} />
            <Route path="/Intro" exact component={Intro}/>
            <Route path="/Changes" exact component={Changes} />
            <Route path="/OldComponent" exact component={OldComponent} />
            <Route path="/WrapperHell" exact component={WrapperHell} />
            <Route path="/NewComponent" exact component={NewComponent} />
            <Route path="/UseStateDestructure" exact component={UseStateDestructure} />
            <Route path="/UseStateButton" exact component={UseStateButton}/>
            <Route path="/UseStateType" exact component={UseStateType} />
            <Route path="/UseEffectIntro" exact component={UseEffectIntro} />
            <Route path="/UseEffectCompare" exact component={UseEffectCompare} />
            <Route path="/UseContextIntro" exact component={UseContextIntro} />
            <Route path="/UseContextDemo" exact component={UseContextDemo} />
            <Route path="/UseRefIntro" exact component={UseRefIntro} />
            <Route path="/UseRefDemo" exact component={UseRefDemo} />
          </UserContext.Provider>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
