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
