import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const StateContext = createContext();

export const StateProvider = (props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
