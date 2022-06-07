// import {useEffect, useState} from 'react';
// import apiSubject from '../api/apiSubject';
// import {CancelToken} from 'apisauce';

// export default function useSubjects(){
//     const [subjects, setSubjects]=useState([])

//     useEffect(
//         ()=>{
//             const source=CancelToken.source();
//             const getSubs=async()=>{
//                 const response = await apiSubject.get(source.token)
//                 setSubjects(response)
//             }
//             getSubs()
//             return()=>{source.cancel();}
//         },
//         [] //we leave this empty because we only want to do this one time
//     )

//     return subjects
// }