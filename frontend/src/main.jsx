import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp.jsx";
import Home from "./components/LandingPage/Home.jsx";
import AutomationServices from "./components/Services/AutomationServices.jsx";
import SecurityServicesPage from "./components/Services/SecurityServicesPage.jsx";
import ITServicesPage from "./components/Services/ITServicesPage.jsx";
import SolarServicesPage from "./components/Services/SolarServicesPage.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ProductListing from "./components/Ecom/ProductListing/ProductListing.jsx";
import Cart from "./components/Ecom/Cart/Cart.jsx";
import ProductPage from "./components/Ecom/IndividualProduct/ProductPage.jsx";
import PlaceOrder from "./components/Ecom/Placeorder/PlaceOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <SignInSignUp /> },
      { path: "/automationservices", element: <AutomationServices /> },
      { path: "/itservices", element: <ITServicesPage /> },
      { path: "/securitysolutions", element: <SecurityServicesPage /> },
      { path: "/solarservices", element: <SolarServicesPage /> },
      { path: "/aboutus", element: <AboutUs /> },
    ],
  },
  {
    path: "/store",
    element: <ProductListing />,
  },
  {
    path: "/store/cart",
    element: <Cart />,
  },
  {
    path: "/store/product",
    element: <ProductPage />,
  },
  {
    path: "/store/placeorder",
    element: <PlaceOrder />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
