import React, { createContext, useContext, useReducer} from 'react';

// Preparing Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => 
    (

        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {/* children => App */}
            {children} 
        </StateContext.Provider>
    );

// Hook to pull information from Data Layer
export const useStateValue = () => useContext(StateContext);