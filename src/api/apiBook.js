// need this for books :)
import apiClientNoAuth from "./clientNoAuth";
import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = '/book'

const get = async (cancelToken) =>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        books=response.data.books
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        books
    }
}

const getBook = async (id, cancelToken) =>{
    let error;
    let book;

    const response = await apiClientTokenAuth(cancelToken).get(endpoint+'/'+id);
    if (response.ok){
        book=response.data
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        book
    }
}

const apiClient={
    get,
    getBook,
}
export default apiClient