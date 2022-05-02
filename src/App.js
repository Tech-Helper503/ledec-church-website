import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon  from '@mui/icons-material/Menu'
import { useState } from 'react';

function App() {
  const [dropdownOpened, setdropdownOpened] = useState(false);

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Container sx={{display: {xs: 'block', md:'block', lg: 'none', xl: 'none'}}}>
            <IconButton onClick={() => setdropdownOpened(!dropdownOpened)}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Container>
          <Typography variant='h4'>LEDEC CHURCH</Typography>
        </Toolbar>
      </AppBar>
      {dropdownOpened && (
        <Box sx={{'width': '100%', 'height': '100%'}}>
          <Typography variant="h5">home</Typography>
        </Box>
      )}
    </div>
  );
}

export default App;
