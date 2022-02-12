import { defaultState } from "./AuthProvider";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const AuthReducer = (state: defaultState, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      cookies.set("isAuthenticated", JSON.stringify(1), {
        expires: new Date(Date.now() + 31536000000),
      });
      cookies.set("user", JSON.stringify(action.payload), {
        expires: new Date(Date.now() + 31536000000),
      });
      return {
        ...state,
        isAuthenticated: 1,
        user: action.payload,
      };
    }
    case "LOGOUT": {
      cookies.remove("isAuthenticated");
      cookies.remove("user");
      cookies.remove("token");
      return {
        ...state,
        isAuthenticated: 0,
        user: null,
      };
    }

    case "RESET": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
