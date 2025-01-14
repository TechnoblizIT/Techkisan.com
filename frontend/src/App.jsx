import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";


function App() {
  return (
    <>
      <Hero />
      <Services />
      <Outlet />
    </>
  );
}

export default App;
