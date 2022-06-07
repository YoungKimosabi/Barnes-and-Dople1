import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

export default function AddRemoveBook({book}) {
  return (
    <>
        <ButtonGroup sx={{margin:"auto"}}>
            {/* <IconButton key="add" onClick={()=>{console.log(`Add ${book.title} to your list`)}}>
                <AddCircleOutlineRoundedIcon fontSize="small"/>
            </IconButton> */}
            <IconButton key="remove" onClick={()=>{console.log(`Remove ${book.title} from your list`)}}>
                <RemoveCircleOutlineRoundedIcon fontSize="small"/>
            </IconButton>
        </ButtonGroup>
    </>
  )
}

