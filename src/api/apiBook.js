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

const getBySub= async (id, cancelToken) =>{
    let error;
    let books;

    const response = await apiClientTokenAuth(cancelToken).get(endpoint+'/subject/'+id)
    if (response.ok){
        books=response.data.books
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        books
    }
}//don't need these for Kev's API
// const post = async(token, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, data)
//     return response.ok
// }

// const put = async(token, id, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, data)
//     return response.ok
// }

// const del = async(token, id, cancelToken)=>{
//     const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+id)
//     return response.ok
// }

export default {
    get,
    getBySub,
    // post,
    // put,
    // del
}