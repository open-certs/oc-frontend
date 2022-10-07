export const CertificateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GETPROJECTTOKEN":
      return {
        ...state,
        data: action.payload,
      };
    case "GENERATECERTIFICATE":
      return {
        ...state,
        certificateData: action.payload,
      };

    default:
      return { state };
  }
};

// import { defaultState } from "./CertificateProvider";
// import Cookies from "universal-cookie";

// export const cookies = new Cookies();

// export const CertificateReducer = (state: defaultState, action: any) => {
//   switch (action.type) {
//     case "LOGIN":
//       // console.log(action.payload.token, action.payload.user);
//       cookies.set("projecttoken", action.payload.token);
//       return {
//         ...state,
//         isAuthenticated: 1,
//         user: action.payload.user,
//       };

//     default:
//       return state;
//   }
// };

// // {
// //         expires: new Date(Date.now() + 3000),
// //         path: "/",
// //       }
