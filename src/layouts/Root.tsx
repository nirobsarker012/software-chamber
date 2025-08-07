import Footer from "@a/components/ui/Footer";
import Navbar from "@a/components/ui/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
