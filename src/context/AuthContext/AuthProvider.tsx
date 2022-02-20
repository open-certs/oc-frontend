import React, { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiBaseUrl } from "../../config";
import { AuthReducer, cookies } from "./AuthReducer";

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
export default AuthContext;

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const navigate = useNavigate();

  const loginConfirm = (token: string): any => {
    const url: string = `${apiBaseUrl}/users/me`;
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: token,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log({ res });
        if (res.error) {
          throw new Error("Invalid token");
        } else {
          dispatch({
            type: "LOGIN",
            payload: res.user,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log({ err });
        Swal.fire({
          title: "Error",
          text: "Invalid Token",
          icon: "error",
        });
      });
  };

  const logout = (): any => {
    dispatch({
      type: "LOGOUT",
    });
    // navigate("/login");
  };

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      loginConfirm(token);
    }
  });

  return (
    <AuthContext.Provider
      value={
        {
          ...state,
          loginConfirm,
          logout,
        } as any
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
