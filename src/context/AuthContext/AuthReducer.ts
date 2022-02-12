import { defaultState } from "./AuthProvider";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AuthReducer = (state: defaultState, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      cookies.set(
        "isAuthenticated",
        JSON.stringify(action.payload.isAuthenticated),
        {
          expires: new Date(Date.now() + 31536000000),
        }
      );
      cookies.set("user", JSON.stringify(action.payload.user), {
        expires: new Date(Date.now() + 31536000000),
      });
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    }
    case "LOGOUT": {
      cookies.remove("isAuthenticated");
      cookies.remove("user");
      return {
        ...state,
        isAuthenticated: false,
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
