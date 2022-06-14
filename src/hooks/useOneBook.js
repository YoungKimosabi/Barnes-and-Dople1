import {useEffect, useState} from 'react'
import apiBook from '../api/apiBook'
import {CancelToken} from 'apisauce'

export default function useOneBook(id) {
    const [book, setBook] = useState([])

    useEffect(
        ()=>{
            let source; (async()=>{
                source = CancelToken.source()
                const response = await apiBook.getBook(id, source.token)
                setBook(response)
            })()
            return()=>{source.cancel()}
        },
        [id]
    )
    return book
}