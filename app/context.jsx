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
        clearData: "CLEAR_DATA",
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
            case ACTION_TYPES.clearData:
                return {
                    ...prev,
                    user:null,
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

                const dt = await makeSignInRequest(authData);

                // console.log(dt);
                const [error, response] = dt

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
            },
            signOut: async ()=>{


                dispatch({
                    type: ACTION_TYPES.clearData,
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


