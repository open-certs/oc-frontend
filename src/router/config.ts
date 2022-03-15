import { Verify } from "crypto";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { VerifyCertificate } from "../pages/VerifyCertificate";

export default [
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
];
