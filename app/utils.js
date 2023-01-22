// Utility used in app
import axios from "axios"

let serverUrl = import.meta.env.VITE_SERVER_URL;
if (!serverUrl){
    console.log("No sevurl");
    serverUrl= 'http://localhost:3080';
}

const baseUrl = `${serverUrl}/api`;

export const MakeRequest = async (method="GET", customConfig=null)=>{
    let result = [null, null];
    let response;

    const config = {
        method: method.toUpperCase(),
        url: baseUrl,
        ...customConfig
    }

    try{
        response = await axios(config);
    }catch(err){
        return [{message: err.message}, null]; // end it here
    }

    result = [null, response];
    return result;
}


export const makeSignUpRequest = async (userData)=>{

    const [response, requestError] = await MakeRequest("POST", {
        data:userData,
        url: `${baseUrl}/auth/register`
    });

    if (requestError){
        return [requestError, null];
    }


    const {error, ...rest} = response;

    if (error){
        return [error, null];
    }

    return rest; // status code and data
}
export const makeSignInRequest = async (authData)=>{

    const [response, requestError] = await MakeRequest("POST", {
        data:authData,
        url: `${baseUrl}/auth/login`
    });

    if (requestError){
        return [requestError, null];
    }


    const {error, ...rest} = response;

    if (error){
        return [error, null];
    }

    return rest; // status code and data
}