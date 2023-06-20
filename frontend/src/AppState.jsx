import React, { useReducer } from 'react';

//State is not persisted on refresh - see GitHub repository issues for more info
//To be revisited after demo day

// INITIAL STATE
const initialState = {
  url: 'http://localhost:3000',
  token: null,
  email: null,
  user_id: null,
  user: null,
}

// REDUCER
// action = {type: '', payload: --- }
const reducer = (state, action) => {
  let newState;
  switch(action.type){
    case "auth":
      newState = {...state, ...action.payload};
      return newState;
    case "logout":
      newState = {...state, token: null, user: null, email: null, user_id: null};
      window.localStorage.removeItem("auth");
      return newState;
    default:
      return state;
  }
}

//CONTEXT
const AppContext = React.createContext(null);

export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>
}

// useAppState hook
export const useAppState = () => {
  return React.useContext(AppContext);
}

