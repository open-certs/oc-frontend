import { Verify } from "crypto";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { VerifyCertificate } from "../pages/VerifyCertificate";
import Certificate from "../pages/Certificate";
import ProjectPicker from "../pages/ProjectPicker";

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
  {
    path: "/certificate",
    Component: Certificate,
  },
  {
    path: "/projectpicker",
    Component: ProjectPicker,
  },
];
