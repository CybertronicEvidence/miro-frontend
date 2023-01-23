// Utility used in app
import axios from "axios"

let serverUrl = import.meta.env.VITE_SERVER_URL;
if (!serverUrl) {
    console.log("No sevurl");
    serverUrl = 'http://localhost:3080';
}

const baseUrl = `${serverUrl}/api`;

export const MakeRequest = async (method = "GET", customConfig = null) => {
    let result = [null, null];
    let response;

    const config = {
        method: method.toUpperCase(),
        url: baseUrl,
        ...customConfig
    }

    try {
        let res = await axios(config);
        response = res.data
    } catch (err) {

        let error = { message: err.message };

        if (err.response) { // this is a bad response from server like 400
            const { error: responseError } = err.response.data;
            error = responseError;
        }

        return [error, null]; // end it here
    }

    result = [null, response];
    return result;
}


export const makeSignUpRequest = async (userData) => {

    const [requestError, response] = await MakeRequest("POST", {
        data: userData,
        url: `${baseUrl}/auth/register`
    });

    if (requestError) {
        return [requestError, null];
    }


    const { error, ...rest } = response;

    if (error) {
        return [error, null];
    }

    return [null, rest]; // status code and data
}
export const makeSignInRequest = async (authData) => {

    const [requestError, response] = await MakeRequest("POST", {
        data: authData,
        url: `${baseUrl}/auth/login`
    });

    if (requestError) {
        return [requestError, null];
    }


    const { error, ...rest } = response;

    if (error) {
        return [error, null];
    }

    return [null, rest]; // status code and data
}


export function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
}