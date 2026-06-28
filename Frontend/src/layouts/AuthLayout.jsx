import React from "react";
import { Outlet } from "react-router-dom";
import bgImg from "../assets/01.jpg";

const AuthLayout = () => {
  return (
    <div
      className="bg-cover bg-no-repeat flex w-full min-h-screen items-center justify-center p-7"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col gap-3 border p-6 w-full max-w-sm shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;