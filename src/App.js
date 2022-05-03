import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Hubs } from './pages/Hubs'
import { Home } from './pages/Home'



function App() {


  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
      </div>

      <Switch>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/hubs" element={<Hubs />}>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
