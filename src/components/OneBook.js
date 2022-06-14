import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import useOneBook from '../hooks/useOneBook';
import {useParams} from 'react-router-dom';
import Error from './Error';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useNavigate} from 'react-router-dom';

const Book = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#C9B79C' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OneBook() {
  const {id} = useParams()
  const {book, error} = useOneBook(id);
  const navigate = useNavigate()
  const {user, list, addToList, removeFromList, setAlert}=useContext(AppContext)

  const handleAddToList=(book)=>{
    if (book.id in list.filter(bk=>bk.id)){
      setAlert(`${book.title} is already on your list. Please choose another title to add!`)
      navigate('/search')
    }else{
      addToList(book)
      setAlert(`${book.title} has been added to your reading list`)
      navigate('/list')    
    }}

  const handleRemoveFromList=(book)=>{
    removeFromList(book)
    setAlert(`You have removed ${book.title} from your reading list`)
    navigate('/list')
  }


  if (error){
    return (
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }
  if(!book){
    return(
      <Box sx={{display:"flex"}}>
          <CircularProgress sx={{alignSelf:"center", justifySelf:"center"}}/>

      </Box>
    )
  }

  return (
    <>
    <Box display='flex' width='50vw' margin='auto'>
      <Grid item={true} sx={{m:1, pr:0, border: '.1px solid #C9B79C', borderRadius:1}}>
        <Grid item={true} sm={12} xs={12} md={12}>
          <Book sx={{display:"flex",  flexDirection:"row", alignItems:"center"}}>
            <Avatar alt={book.title} sx={{height:'30%', width:'30%', marginLeft:'15%'}} variant="rounded" src={book.img}/>
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
        {book.id in list.filter(b=>b.id)?
          <RemoveCircleIcon sx={{justifyContent:'flex-end', alignItems:'flex-end'}} onClick={()=>{handleRemoveFromList(book)}}></RemoveCircleIcon>
        :
          <AddCircleIcon sx={{justifyContent:'flex-end', alignItems:'flex-end'}} onClick={()=>{handleAddToList(book)}}></AddCircleIcon>
        }
        </Book>
      </Grid>
    </Grid>
    </Box>
    </>
  );
}