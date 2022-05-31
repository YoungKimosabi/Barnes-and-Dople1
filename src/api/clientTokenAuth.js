import {create} from "apisauce";


const apiClientTokenAuth = (token, cancelToken) =>create({
    baseURL: "http://cae-bootstore.herokuapp.com/",
    headers:{
        Authorization:"Bearer "+token
    },
    cancelToken
})

export default apiClientTokenAuth