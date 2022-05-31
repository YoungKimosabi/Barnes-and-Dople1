// // do we need this for the nook?
import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpoint='/api/subject'

const get = async (cancelToken) =>{
    let error;
    let subjects;

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        subjects=response.data.subjects
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        subjects
    }
}

const post = async (token, subName, cancelToken) =>{
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, {name:subName})
    return response.ok
}

const put = async (token, id, subName, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, {name:subName})
    return response.ok
}

const del = async(token, id, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).del(endpoint+'/'+id)
    return response.ok
}

export default {
    get,
    post, 
    put,
    del
}