// import {useEffect, useState} from 'react';
// import apiBook from '../api/apiBook';
// import {CancelToken} from 'apisauce';

// export default function useBooks(subjectID=null){
//     const [books, setBooks]=useState({});

//     useEffect(
//         ()=>{
//             const source = CancelToken.source()
//             subjectID?
//                 (async()=>{
//                     const response = await apiBook.getBySub(subjectID, source.token);
//                     setBooks(response)
//                 })()
//             :
//                 (async()=>{
//                     const response = await apiBook.get(source.token)
//                 })()
//             return ()=>{source.cancel()}
//         },
//         [subjectID] //want to refresh the subjects every time the user changes what they want to look at
//     )
//     return books
// }