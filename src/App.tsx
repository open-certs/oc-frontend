import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./router/route";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { Fork } from "./components/Fork";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Fork />
        <Routing />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
