import { Toolbar, Container, Typography} from '@mui/material'
import { Dropdown } from './Dropdown'
import { DropdownItems } from './DropdownItems'

function NavBar() {
    return (
        <Toolbar>
            <Container sx={{display: {xs: 'block', md:'block', lg: 'none', xl: 'none'}}}>
                <Dropdown actions={[]} actionsDisabled items={['Home', 'About', 'Hubs']} componentMode component={DropdownItems}></Dropdown>            
            </Container>
            <Typography variant='h4'>LEDEC CHURCH</Typography>
      </Toolbar>
    )
}

export {NavBar}