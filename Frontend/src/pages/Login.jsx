import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const Login = () => {
  const navigate =  useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleMessages = (err) => {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 1500);
  };
  const handleClick = async () => {
    if (!email.trim() || !password.trim()) {
      handleMessages("Fields should not be empty.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      handleMessages("Invalid Email.");
      return;
    }
    const mail = email.trim();
    const psswd = password.trim();
    setEmail("");
    setPassword("");
    try {
      const token = localStorage.getItem("jwt");
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password: psswd,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Response Failed");
        return;
      }
      localStorage.setItem("jwt", data.token);
      handleMessages(
        data.message || "Logged In successfully.",
      );
      navigate("/home");
    } catch (err) {
      handleMessages(err.message);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="email"
        className="outline-none p-3 border"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        className="outline-none p-3 border"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        type="submit"
        className="border p-3 cursor-pointer"
        onClick={handleClick}
      >
        Login
      </button>
      {error && <p className="text-center p-2">{error}</p>}
    </>
  );
};

export default Login;
