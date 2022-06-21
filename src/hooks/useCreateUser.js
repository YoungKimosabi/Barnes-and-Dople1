import {useEffect, useState} from 'react'
import {CancelToken} from 'apisauce'
import {postUser} from '../api/apiNoAuth'
import {useNavigate} from 'react-router-dom';

export default function useCreateUser(user) {
    const [error, setError] = useState('')
    const navigate = useNavigate()


    useEffect(
        ()=>{
            const source = CancelToken.source()
            console.log('here')
            if (user.first_name){
                const register = async()=>{
                    const response = await postUser(user, source.token)
                    console.log("response",response)
                    if (response){
                        console.log('User was created successfully');
                        navigate('/login')
                    }
                    setError(response.error);
                }
                register()
                return ()=>{source.cancel()}                
            }
        },
        [user]
    )
    return error
}