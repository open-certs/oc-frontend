import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Landing/Login";
import { Main } from "../components/Landing/Main";

interface RoutingProps {}

export const Routing: React.FC<RoutingProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
