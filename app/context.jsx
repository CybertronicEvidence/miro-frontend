import React, {createContext, useMemo, useReducer} from 'react';

const AppContext = createContext();

AppContext.displayName = "Miro application context"

export default AppContext;

export const AppProvider = ({children})=>{
    const initialState = {
        user: null,
        authToken: null,
    }

    const ACTION_TYPES = {
        updateData: "UPDATE_DATA",
        updateToken: "UPDATE_TOKEN"
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
            case ACTION_TYPES.updateToken:
                return {
                    ...prev,
                    authToken: payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const contextData  = useMemo(()=>(
        {
            ...state,
            signUp: (userData)=>{
                dispatch({
                    type: ACTION_TYPES.updateData,
                    payload: userData
                });

                return null;
            },
            signIn: (authData)=>{
                dispatch({
                    type: ACTION_TYPES.updateToken,
                    payload: "sample__dummy--token"
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


