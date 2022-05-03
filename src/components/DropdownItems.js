import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

function DropdownItems(props) {
    return props.items.map(item => {
      return (
        <div key={Math.random()}style={{padding: '30px'}}>
          <Link to={`/${item.toLowerCase()}`}>
            <Typography>{item}</Typography>        
          </Link>
        </div>
      )
    })
}

export {DropdownItems}