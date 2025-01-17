import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Automation from "./components/Banner/Automation";
import Solar from "./components/Banner/Solar";
import Security from "./components/Banner/Security";
import ITservices from "./components/Banner/ITservices";
import ScrollToTop from "./components/Scroller/ScrollToTop";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Services />
      <Automation />
      <Solar />
      <Security />
      <ITservices />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
