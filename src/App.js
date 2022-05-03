import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Dropdown } from './components/Dropdown';

function App() {


  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Container sx={{display: {xs: 'block', md:'block', lg: 'none', xl: 'none'}}}>
            <Dropdown actions={[]} items={['Home', 'About Us', 'Contact Us', 'Our Locations', 'Hubs']}></Dropdown>            
          </Container>
          <Typography variant='h4'>LEDEC CHURCH</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
