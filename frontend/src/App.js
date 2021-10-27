// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from "../src/components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        
          {/* <ul>
            <Link to='/'>HOME</Link>
          </ul>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/Register'>Register</Link>
          </li> */}
        

        <Switch>
          <Route exact path ='/'><Home/></Route>
          <Route path="/Login"><Login /></Route>
          <Route path = "/Register"><Register/></Route>
          <Route path = "/Dashboard"><Dashboard/></Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
