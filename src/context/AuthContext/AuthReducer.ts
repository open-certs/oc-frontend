import { defaultState } from "./AuthProvider";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const AuthReducer = (state: defaultState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload.token, action.payload.user);
      cookies.set("isAuthenticated", JSON.stringify(1));
      cookies.set("user", action.payload.user);
      cookies.set("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: 1,
        user: action.payload.user,
      };

    case "LOGOUT":
      cookies.remove("isAuthenticated");
      cookies.remove("user");
      cookies.remove("token");
      return {
        ...state,
        isAuthenticated: 0,
        user: null,
      };

    case "RESET":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

// {
//         expires: new Date(Date.now() + 3000),
//         path: "/",
//       }
