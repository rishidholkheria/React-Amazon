import React, { createContext, useContext, useReducer} from "react";

//This is the Data Layer
export const StateContext = createContext();

//Build a provider
const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export default StateProvider;
export const useStateValue = () => useContext(StateContext);
