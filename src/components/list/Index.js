import React, {useContext} from 'react'
import Box from '@mui/material/Box'
import ListBook from './ListBook'
import { AppContext } from '../../context/AppContext'

export default function Index(){
    const {list} = useContext(AppContext)
return (
    <>
        <Box sx={{mb:15}}>
            {
                [...new Set(list?.map(JSON.stringify))].map(JSON.parse)?.map(
                    (book)=><ListBook item={true} key={book.id} book={book}/>
                )
            }
        </Box>
    </>
    )
}


// const book1 = {
//     "id": 1,
//     "img": 'https://images-na.ssl-images-amazon.com/images/I/713O7XaEFLL.jpg',
//     "title": 'How Music Works',
//     "author": 'David Byrne'
// };
// const book2 = {
//     "id": 2,
//     "img": 'https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg',
//     "title": 'Thinking Fast and Slow',
//     "author": 'Daniel Kahneman'
// };
// const book3={
//     "id": 3,
//     "img": 'https://images-na.ssl-images-amazon.com/images/I/41MCjKLqN9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
//     "title": 'Anna Karenina',
//     "author": 'Leo Tolstoy'
// };