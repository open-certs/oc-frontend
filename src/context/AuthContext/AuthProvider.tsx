import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

export interface defaultState {
  isAuthenticated: number;
  user: any;
  loading: boolean;
}

const initialState: defaultState = {
  isAuthenticated: 0,
  user: {},
  loading: false,
};

const AuthContext = createContext(initialState);

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    ></AuthContext.Provider>
  );
};

export default AuthProvider;
