import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Dropdown } from './components/Dropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function DropdownItems(props) {
  return props.items.map(item => {
    return (
      <div style={{padding: '30px'}}>
        <Link to={`/${item.toLowerCase()}`}>
          <Typography>{item}</Typography>        
        </Link>
      </div>
    )
  })
}

function App() {


  return (
    <Router>
      <div className="App">
        <Toolbar>
          <Container sx={{display: {xs: 'block', md:'block', lg: 'none', xl: 'none'}}}>
            <Dropdown actions={[]} actionsDisabled items={['Home', 'About', 'Hubs']} componentMode component></Dropdown>            
          </Container>
          <Typography variant='h4'>LEDEC CHURCH</Typography>
        </Toolbar>
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
