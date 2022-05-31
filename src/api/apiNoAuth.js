import apiClientNoAuth from './clientNoAuth';

const endpoint = '/user';

export const postUser = async (email, first_name, last_name, password, cancelToken) => {
    let error;
    let user;

    const response = await apiClientNoAuth(email, first_name, last_name, password, cancelToken).get(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="You must coplete all form fields to proceed"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return {
        error,
        user
    }
};