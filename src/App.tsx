import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./router/route";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { Fork } from "./components/Fork";
import Footer from "./components/Footer";
import DarkModeButton from "./components/DarkModeButton";
import { ThemeProvider } from "./context/ThemeContext/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Fork />
          <Routing />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
