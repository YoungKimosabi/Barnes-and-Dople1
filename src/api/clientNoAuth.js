import {create} from "apisauce";

const apiClientNoAuth = (cancelToken) =>create({
    baseURL: "http://cae-bootstore.herokuapp.com/",
    cancelToken
})

export default apiClientNoAuth