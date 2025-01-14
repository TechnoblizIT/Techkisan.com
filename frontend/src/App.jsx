import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <>
      <Hero />
      <Outlet />
    </>
  );
}

export default App;
