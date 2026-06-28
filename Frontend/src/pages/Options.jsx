import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="border p-3 cursor-pointer"
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className="border p-3 cursor-pointer"
      >
        Register
      </button>
    </>
  );
};

export default Options;
