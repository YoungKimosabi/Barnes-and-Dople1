import {create} from "apisauce";
import base64 from "base-64";

const apiClientBasicAuth = (email, password, cancelToken) =>create({
    baseURL: "http://cae-bootstore.herokuapp.com/",
    headers:{
        Authorization:"Basic "+base64.encode(email+":"+password)
    },
    cancelToken
})

export default apiClientBasicAuth