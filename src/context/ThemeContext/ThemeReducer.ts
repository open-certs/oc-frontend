import { defaultThemeType } from "./ThemeProvider";

export const ThemeReducer = (state: defaultThemeType, action: any) => {
  switch (action.type) {
    case "CHANGE": {
      localStorage.setItem("theme", action.payload);
      console.log(action.payload);
      return {
        ...state,
        theme: action.payload,
      };
    }

    default:
      return state;
  }
};
