import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Automation from "./components/Banner/Automation";
import Solar from "./components/Banner/Solar";
import Security from "./components/Banner/Security";
import ITservices from "./components/Banner/ITservices";


function App() {
  return (
    <>
      <Hero />
      <Services />
      <Automation />
      <Solar />
      <Security />
      <ITservices />
      <Outlet />
    </>
  );
}

export default App;
