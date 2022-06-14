import React, {useContext} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddOutlined from '@mui/icons-material/AddOutlined';
import IconButton from'@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import useBooks from '../hooks/useBooks';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Error from './Error';
import {AppContext} from '../context/AppContext';
import {useNavigate} from 'react-router-dom';

export default function BookBrowser({subject}) {
    const {error, books} = useBooks(subject)
    const {addToList, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
    
    const handleAddToList=(book)=>{
        addToList(book)
        setAlert(`You have added ${book.title} for your reading list`)
    }

    if (error){
        return (
            <Box sx={{display:"flex"}}>
                <Error>{error}</Error>
            </Box>
        )
    }
    if(!books){
        return(
            <Box sx={{display:"flex"}}>
                <CircularProgress sx={{alignItems:"center", justifyContent:"center"}}/>

            </Box>
        )
    }
    return(
        <ImageList cols={3}>
            {books.map((book)=>(
                <ImageListItem key={book.img}>
                    <img
                        src={`${book.img}`}
                        srcSet={`${book.img}`}
                        alt={book.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={book.title}
                        subtitle={book.author}
                        actionIcon={<>
                            <IconButton
                                sx={{ color:'black'}}
                                area-label={`info about ${book.title}`}
                                onClick={()=>navigate('/book'+book.id)}
                            >
                                <InfoIcon/>
                            </IconButton>
                            <IconButton
                            sx={{color:'black'}}
                            aria-label={`info about ${book.title}`}
                            onClick={()=>{handleAddToList(book)}}
                            >
                                <AddOutlined/>
                            </IconButton>
                        </>}  
                    /> 
                </ImageListItem>
            ))}
        </ImageList>
    )
}

