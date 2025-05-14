import React, { useEffect,useState } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { showWarn } from "../../utils/toastUtils";
import endpoints from "../endpoints/endpoints";

const Tickets = () => {
  const Endpoints = new endpoints();
  const [userData, setUserData] = useState(null);
  const navigator = useNavigate();
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setUserData(null);
      return;
    }

    try {
      const response = await fetch(Endpoints.LOGIN_USER_FETCH, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data.user);
        console.log(data.user);
        
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUserData(null);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigator("/login")
      showWarn("Please login to access this page");
    }
  fetchUserData();  
  },[]);
  return (
    <div>
      <h1 className="flex items-center justify-center">Hello {userData?userData.name:""}</h1>
      {/* <Footer /> */}
    </div>
  );
};

export default Tickets;
