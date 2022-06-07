// import React, {useContext, useState, useEffect} from 'react';
// import {getUser} from '../api/apiBasicAuth';
// import {CancelToken} from 'apisauce';

// export default function useLogin(loginCreds, setLoginCreds, setError, setUser){
//     const login = async(cancelToken)=>{
//         const response = await getUser(loginCreds.email, loginCreds.password, cancelToken)
//         if(response.user?.token){
//             console.log('logged in');
//             setUser(response.user);
//             setError(response.error);
//             setLoginCreds({})
//             //navigate to the home page
//             }
//             setError(response.error);
//         }
//         //API call needs to be async, but useEffect CANNOT be asynced
//         useEffect(
//             ()=>{
//                 const source = CancelToken.source()
//                 if(loginCreds.email && loginCreds.password)
//                 login(source.token)
//                 return () => (source.cancel())
//             },
//             [loginCreds, setLoginCreds, setError, setUser]
//         )
// }