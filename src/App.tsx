import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./router/route";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { Fork } from "./components/Fork";
import { ThemeProvider } from "./context/ThemeContext/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { CertificateProvider } from "./context/CertificateContext/CertificateProvider";
import ProjectRouter from "./context/ProjectContext/ProjectRouter";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastContainer />
        <AuthProvider>
          <CertificateProvider>
            <Header />
            <Fork />
            <ProjectRouter>
              <Routing />
            </ProjectRouter>
            <Footer />
          </CertificateProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
