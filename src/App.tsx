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
import CertificateRouter from "./context/CertificateContext/CertificateRouter";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastContainer />
        <AuthProvider>
          <CertificateRouter>
            <Header />
            <Fork />
            <Routing />
            <Footer />
          </CertificateRouter>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
