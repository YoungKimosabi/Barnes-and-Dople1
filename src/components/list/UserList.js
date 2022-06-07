import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddRemoveBook from './AddRemoveBook';

import Avatar from '@mui/material/Avatar';


//{book} will eventually be passed into UserList()?
export default function UserList() { 
  return (
  
    <Card sx={{height:"100%", display:"flex", flexWrap: "wrap"}}>
    {listData.map((book) => (
        <CardContent sx={{display: "inline-block", flex:"1 0 21%", alignItems: "flex-start", justifyContent: "center"}} key={book.title}>
          <Typography variant="h5" gutterBottom>
            {book.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {book.desc}
          </Typography> */}
          <Typography variant="h6" color="text.secondary">
            {book.author}
          </Typography>
          <Avatar alt={book.title} sx={{height:'20%', width:'40%'}} variant="rounded" src={book.img}/>
          <CardActions>
            <AddRemoveBook book={book} />
          </CardActions>
      </CardContent>
    )
  )
}
    </Card>

)};

const book1 = {
  "id": 1,
  "img": 'https://images-na.ssl-images-amazon.com/images/I/713O7XaEFLL.jpg',
  "title": 'How Music Works',
  "author": 'David Byrne'
};
const book2 = {
  "id": 2,
  "img": 'https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg',
  "title": 'Thinking Fast and Slow',
  "author": 'Daniel Kahneman'
};
const book3={
  "id": 3,
  "img": 'https://images-na.ssl-images-amazon.com/images/I/41MCjKLqN9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  "title": 'Anna Karenina',
  "author": 'Leo Tolstoy'
};

const listData = [book1, book2, book3]




