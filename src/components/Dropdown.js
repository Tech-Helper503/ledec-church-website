import { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'


function Dropdown(props) {
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [dropdownOptionClicked, setDropdownOptionClicked] = useState();
    
    function optionOnClick(index) {
        setDropdownOptionClicked(index)
        for (let i = 0; i < props.actions.length; i++) {
            const element = props.actions[i];
            if(i === dropdownOptionClicked) {
                element.call()
            }
            
        }
    }

    
    return (
        <div>
            <IconButton onClick={() => setDropdownOpened(prev => !prev)}>
                <MenuIcon />
            </IconButton>
            {dropdownOpened && props.items.map((value,index) => {
                return (
                    <div onClick={() => optionOnClick(index)} key={index} style={{padding: '30px', cursor: 'pointer'}}>
                        <Typography>{value}</Typography>
                    </div>
                )
            })}
        </div>
    )
}

export {Dropdown}