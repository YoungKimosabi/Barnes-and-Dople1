import React from 'react'
import EditForm from '../forms/EditForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
// import {} from '@mui/icons/material'

export default function EditProfileView(){
    const theme = useTheme()

    return(
        <>
            <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h4">Edit Profile</Typography>
                    <EditForm></EditForm>
            </Paper>
        </>
    )
}