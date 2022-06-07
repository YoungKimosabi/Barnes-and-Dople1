import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Book = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#C9B79C' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//do i need to pass book into this function? or only when I'm hooked up to the API?
export default function OneBook() {

    const book={
        "id": 1,
        "img": 'https://images-na.ssl-images-amazon.com/images/I/713O7XaEFLL.jpg',
        "title": 'How Music Works',
        "author": 'David Byrne',
        "desc": 'This is a book about music',
        "subject": 'Culture, Arts & Entertainment'
    };

  return (
      <Grid container spacing={1} sx={{m:1, pr:2, border: '.1px solid #C9B79C', borderRadius:1}}>
        <Grid book sm={12} xs={12} md={12}>
          <Book sx={{display:"flex",  flexDirection:"row", alignItems:"center"}}>
            <Avatar alt={book.title} sx={{height:'30%', width:'30%', marginLeft:'15%'}} variant="rounded" src={book.img}/>
          {/* </Book> */}
        <Grid book sm={12} xs={12} md={12}>
          {/* <Book sx={{height:'100%', alignContent:"center"}}> */}
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
        </Book>
      </Grid>
    </Grid>

  );
}