import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import SignInSignUp from "./components/SignInSignUp/SignInSignUp.jsx";
import Home from "./components/LandingPage/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [,
      { path: "/", element: <Home /> },
      { path: "/login", element: <SignInSignUp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
