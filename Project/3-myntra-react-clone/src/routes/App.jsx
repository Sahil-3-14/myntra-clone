import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/FetchItems";
import { Outlet } from "react-router-dom";

export default function App() {
  
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet/>
      <Footer />
    </>
  );
}
