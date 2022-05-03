import { Toolbar, Container, Typography} from '@mui/material'
import { Dropdown } from './Dropdown'

function NavBar() {
    return (
        <Toolbar>
            <Container sx={{display: {xs: 'block', md:'block', lg: 'none', xl: 'none'}}}>
                <Dropdown actions={[]} actionsDisabled items={['Home', 'About', 'Hubs']} componentMode component></Dropdown>            
            </Container>
            <Typography variant='h4'>LEDEC CHURCH</Typography>
      </Toolbar>
    )
}

export {NavBar}