import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function AllBooks() {
  return (
    <>
    <ImageList sx={{ margin:"auto", pt:2, width: 300, height: "auto"}} id="imageGrid" >
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {bookData.map((book) => (
        //key goes on the outermost element
        <ImageListItem key={book.img }>
          <img
            src={`${book.img}?w=248&fit=crop&auto=format`}
            srcSet={`${book.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={book.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${book.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

  </>
  );
}

const bookData = [
  {
    id: 1,  
    img: 'https://images-na.ssl-images-amazon.com/images/I/713O7XaEFLL.jpg',
    title: 'How Music Works',
    author: 'David Byrne',
    
  },
  { 
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg',
    title: 'Thinking Fast and Slow',
    author: 'Daniel Kahneman',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41MCjKLqN9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
  },
  {
    id: 4,  
    img: 'https://images-na.ssl-images-amazon.com/images/I/713O7XaEFLL.jpg',
    title: 'How Music Works',
    author: 'David Byrne',
    
  },
  { 
    id: 5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg',
    title: 'Thinking Fast and Slow',
    author: 'Daniel Kahneman',
  },
  {
    id: 6,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41MCjKLqN9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
  },
];