import React from "react";
import logo from "../assets/Logo/logo.png";
const Navbar = () => {
  return (
    <header className="py-8 px-10 flex items-center justify-between sm:px-16 sm:py-10">
      <nav className="flex items-center justify-between w-full gap-1 border px-2 shadow-2xl text-center sm:px-4">
        <h1 className="text-4xl font-bold">DevTracker</h1>
        <img
          src={logo}
          alt="DevTracker Logo"
          className="h-15 w-15 rounded-full"
        />
      </nav>
    </header>
  );
};

export default Navbar;
