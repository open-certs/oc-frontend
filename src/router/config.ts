import Certificate from "../pages/Certificate";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { VerifyCertificate } from "../pages/VerifyCertificate";

const RouterConfig = [
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Main,
  },
  {
    path: "/verifyCertificate",
    Component: VerifyCertificate,
  },
  {
    path: "/certificate/:id",
    Component: Certificate,
  },
  {
    path: "/certificate",
    Component: Certificate,
  },
];

export default RouterConfig;
