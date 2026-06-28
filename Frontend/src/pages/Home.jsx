import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Middle from "../components/Middle";
import Footer from "../components/Footer";
import bgImg from "../assets/01.jpg";

const Home = () => {
  useEffect(() => {});
  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar />
      <Middle />
      <Footer />
    </div>
  );
};

export default Home;
