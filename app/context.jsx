import React, {createContext, useMemo, useReducer} from 'react';
import { makeSignInRequest, makeSignUpRequest } from './utils';

const AppContext = createContext();

AppContext.displayName = "Miro application context"

export default AppContext;

export const AppProvider = ({children})=>{
    const initialState = {
        user: null,
    }

    const ACTION_TYPES = {
        updateData: "UPDATE_DATA",
    }

    const reducer = (prev, action)=>{
        const {type, payload} = action;

        switch (type) {
            case ACTION_TYPES.updateData:
                return {
                    ...prev,
                    user:{
                        ...prev.user,
                        ...payload
                    }
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const contextData  = useMemo(()=>(
        {
            ...state,
            signUp: async (userData)=>{

                const [error] = await makeSignUpRequest(userData);

                if (error){
                    return error;
                }

                return null;
            },
            signIn: async (authData)=>{

                const [error, response] = await makeSignInRequest(authData);

                if (error){
                    return error;
                }


                const {token} = response.data;

                if (!token){
                    console.error("No Token for authentication user!");
                    return {
                        message: "Could not authenticate"
                    }
                }

                dispatch({
                    type: ACTION_TYPES.updateData,
                    payload: response.data
                });

                return null;
            }
        }
    ), [state.user, state.authToken]);

    return (
        <AppContext.Provider value={contextData}>
            <AppContext.Consumer>
                {
                    ()=>(
                        <>
                            {children}
                        </>
                    )
                }
            </AppContext.Consumer>
        </AppContext.Provider>
    )
}


