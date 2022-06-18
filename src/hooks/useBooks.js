import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';

export default function useBooks(subject=null){ 
    const [books, setBooks] = useState({})

    useEffect(
        ()=>{
            const source = CancelToken.source()
            subject ?
                (async()=>{
                    const response = await apiBook.getBySub(subject, source.token);
                    setBooks(response)
                })()
            :
                (async()=>{
                    const response = await apiBook.get(source.token)
                    setBooks(response)})()
            return ()=>{source.cancel()}
        },
        [subject] 
    )
    return books
}