import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiTokenAuth from '../api/apiTokenAuth';
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom';

export default function useDeleteUser(){
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user?.user_id){ //is this right?
                (async()=>{
                    response = await apiTokenAuth.delUser(user.token, user.user_id, source.token)
                    if (response){
                        setAlert({msg:`User has been deleted`, cat:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({msg:`Your session has timed out. Please login and try again`, cat:'warning'})
                        navigate('/')
                    }
                })()
            }
            return ()=>{source.cancel()}
        },
        [user.user_id, user.token]
    )
}