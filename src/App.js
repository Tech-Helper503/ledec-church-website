import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Dropdown } from './components/Dropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavBar } from './components/NavBar';



function App() {


  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
      </div>

      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/hubs">
          <Hubs></Hubs>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
