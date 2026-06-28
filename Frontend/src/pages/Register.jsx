import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const API = import.meta.env.VITE_API_URL;

  const handleMessages = (err) => {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 1500);
  };
  const handleClick = async () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      handleMessages("Fields should not be empty.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      handleMessages("Invalid Email.");
      return;
    }
    const uname = username.trim();
    const mail = email.trim();
    const psswd = password.trim();
    setEmail("");
    setUsername("");
    setPassword("");
    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: uname,
          email: mail,
          password: psswd,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }
      handleMessages(
        data.message || "User Registored Successfully. Please Login.",
      );
      navigate("/login");
    } catch (err) {
      handleMessages(err.message);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="username"
        className="outline-none p-3 border"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
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
        type="password"
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
        Register
      </button>
      {error && <p className="text-center p-2">{error}</p>}
    </>
  );
};

export default Register;
