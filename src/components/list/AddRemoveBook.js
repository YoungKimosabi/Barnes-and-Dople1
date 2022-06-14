import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useContext}from 'react'
import {AppContext} from '../../context/AppContext';



export default function AddRemoveBook({book}) {
  const {addToList, removeFromList, clearList}=useContext(AppContext)
  const {user}=useContext(AppContext)
  
  return (
    <>
        <ButtonGroup sx={{margin:"auto"}}>
          <IconButton key="add" onClick={()=>{addToList(book)}}>
              <AddCircleIcon fontSize="small">Add To List</AddCircleIcon>
          </IconButton>
          <IconButton key="remove" onClick={()=>{removeFromList(book)}}>
              <RemoveCircleIcon fontSize="small">Remove From List</RemoveCircleIcon>
          </IconButton>
          <IconButton key="clear" onClick={()=>{clearList(book)}}>
              <DeleteForeverIcon fontSize="small">Clear List</DeleteForeverIcon>
          </IconButton>
        </ButtonGroup>
    </>
  )
}

