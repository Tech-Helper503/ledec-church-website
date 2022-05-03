import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Hubs } from './pages/Hubs'



function App() {


  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
      </div>

      <Switch>
        <Route path="/" element={<App />}>
        </Route>

        <Route path="/hubs" element={<Hubs />}>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
