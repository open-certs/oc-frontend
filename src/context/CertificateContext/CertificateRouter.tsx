import React, { useContext } from "react";
import { CertificatePdf } from "../../components/CertificatePdf";
import CertificateContext, { CertificateProvider } from "./CertificateProvider";

type Props = {
  children?: React.ReactNode;
};
const CertificateRouterUtil = ({ children }: Props) => {
  const { certificate } = useContext<any>(CertificateContext);
  return certificate ? <CertificatePdf /> : <>{children}</>;
};

export default function CertificateRouter(props: Props) {
  return (
    <CertificateProvider>
      <CertificateRouterUtil {...props} />
    </CertificateProvider>
  );
}
