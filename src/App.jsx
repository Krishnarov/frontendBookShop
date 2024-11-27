import React, { useEffect, useState } from "react";
import Home from "./Home/home";
import { Route, Routes, Navigate } from "react-router-dom";
import Course from "./course/course";
import Signup from "./componetes/signup";
import { Toaster } from "react-hot-toast";

import { useauth } from "./context/Authprovider";
import ContactUs from "./Contact/ContactUs";
import AboutUs from "./About/AboutUs";
import MyBooks from "./MyBook/MyBooks";
import BuyBook from "./componetes/BuyBook";

function App() {
  const [user, setuser] = useState(null);
  const getuser = () => {
    try {
      const res = JSON.parse(localStorage.getItem("User"));

      setuser(res);
    } catch (err) {
      console.error("Error reading user from localStorage", err);
    }
  };
  useEffect(() => {
    getuser();
  }, []);


  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home getusers={getuser}/>} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/About" element={<AboutUs />} />
          <Route
            path="/MyBooks"
            element={user ? <MyBooks /> : <Navigate to="/signup" />}
          />
          <Route
            path="/BuyBook/:id"
            element={user ? <BuyBook /> : <Navigate to="/signup" />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
