import React from "react";
import { Routes, Route } from "react-router-dom";
import routerConfig from "./config";

interface RoutingProps {}

export const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      {routerConfig.map((Rut: any) => {
        return (
          <Route key={Rut.path} path={Rut.path} element={<Rut.Component />} />
        );
      })}
    </Routes>
  );
};
