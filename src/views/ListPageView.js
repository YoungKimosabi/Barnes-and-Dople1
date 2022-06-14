import { Typography } from '@mui/material'
import React, {useContext} from 'react'
// import List from '../components/list/Index'
import UserList from '../components/list/UserList'
import { AppContext } from '../context/AppContext'

export default function ListPageView() {
    const {list} = useContext(AppContext)

    if(list.length<=0){
        return(
            <Typography variant="h5" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>You haven't added any books to your list yet!</Typography>
        )
    }
    return (
        <>
        <Typography variant="h5" style={{display:'flex', alignItems:'center', justifyContent:'center', color:'black'}}>Your reading list</Typography>
        <UserList/>
        </>
    )
}
