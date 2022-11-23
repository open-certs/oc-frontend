import React, { createContext, useState } from "react";

export interface defaultState {}

const initialState: any = {};

const CertificateContext = createContext(initialState);
export default CertificateContext;

interface CertificateProviderProps {
  children?: React.ReactNode;
}

export const CertificateProvider: React.FC<CertificateProviderProps> = ({
  children,
}) => {
  const [certificate, setCertificate] = useState(null);

  return (
    <CertificateContext.Provider
      value={
        {
          certificate,
          setCertificate,
        } as any
      }
    >
      {children}
    </CertificateContext.Provider>
  );
};
