import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Automation from "./components/Banner/Automation";
import Solar from "./components/Banner/Solar";
import Security from "./components/Banner/Security";
import ITservices from "./components/Banner/ITservices";
import ScrollToTop from "./components/Scroller/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Outlet />
      {/* <Hero />
      <Services />
      <Automation />
      <Solar />
      <Security />
      <ITservices />
      <Footer />
      <Outlet /> */}
    </>
  );
}

export default App;
