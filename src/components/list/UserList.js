import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { styled } from '@mui/material/styles';


const Book = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#C9B79C' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserList() {
  const {list, addToList, removeFromList, setAlert}=useContext(AppContext)

  const handleRemoveFromList=(book)=>{
    removeFromList(book)
    setAlert(`You have removed ${book.title} from your reading list`)
  }

  return (
  <>
    <Box display='flex' width='50vw' margin='auto'>
    <Grid item={true} sx={{m:1, pr:0, borderRadius:1}}>
      <Grid item={true} sm={12} xs={12} md={12}>
        {list.map((book) => (
        <Book sx={{display:"flex",  flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
          <Avatar alt={book.title} sx={{height:'30%', width:'30%', marginLeft:'10%'}} variant="rounded" src={book.img}/>
        <Grid item={true} sm={12} xs={12} md={12} sx={{ml:2}}>
              <Typography variant="subtitle1"> 
                <strong>Title:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.title}
              </Typography>
              <Typography variant="subtitle1"> 
                <strong>Author:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.author}
              </Typography>
              <Typography variant="subtitle1"> 
                <strong>Description:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.desc}
              </Typography>
              <Typography variant="subtitle1"> 
                <strong>Subject:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.subject}
              </Typography>          
        </Grid>
        <RemoveCircleIcon sx={{justifyContent:'flex-end', alignItems:'flex-end'}} onClick={()=>{handleRemoveFromList(book)}}></RemoveCircleIcon>
      </Book>
      ))}
    </Grid>
  </Grid>
  </Box>
  </>
  );
}