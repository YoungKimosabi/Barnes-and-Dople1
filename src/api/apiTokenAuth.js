import apiClientTokenAuth from './clientTokenAuth';

const endpoint = '/user';

const delUser = async (token, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, cancelToken).get(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="Your session has timed out. Please login again"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return {
        error,
        user
    }
};

const putUser = async (token, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="Your session has timed out. Please login again"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return {
        error,
        user
    }
}

export default {
    delUser,
    putUser
}

