import React, {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useSubjects from '../hooks/useSubjects';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error'; 

// const subjects=[{id:1, name:"Fiction"}, {id:2, name:"Non-Fiction"}, {id:3, name:"Cooking"}]

export default function SubjectBar({handleClick=()=>{}}){
//active buttons!
    const [actSub, setActSub] = useState({});

    const {subjects, error} = useSubjects();

    const handleActSub=(sub)=>{
        if (actSub===sub){
            setActSub({})
        }else{
            setActSub(sub)
        }
    }
    if (!subjects){
        return(
            <Box sx={{display:"flex"}}>
                <CircularProgress/>
            </Box>

        )
    }
    if (error){
        return (
            <Box sx={{display:"flex"}}>
                <Error>{error}</Error>
            </Box>
        )
    }
    return (
        <Stack direction ="row" spacing={1}>
            {subjects?.map((sub)=>(
                sub===actSub?
                <Chip
                key={sub.id}
                size="small"
                color="primary"
                label={sub.name}
                onClick={()=>{handleActSub(sub); handleClick()}} />
                :
                <Chip
                variant="outlined"
                size="small"
                color="primary"
                key={sub.id}
                label={sub.name}
                onClick={()=>{handleActSub(sub); handleClick()}} />
            ))}
        </Stack>
    );
}