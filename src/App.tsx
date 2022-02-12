import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./router/route";
import { AuthProvider } from "./context/AuthContext/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
