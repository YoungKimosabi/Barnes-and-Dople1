import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';

export default function useBooks(subject=null){ //do i need the null parameter?
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
        [subject] //want to refresh the subjects every time the user changes what they want to look at
    )
    return books
}