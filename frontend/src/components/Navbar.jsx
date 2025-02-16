import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [home, setHome] = useState("Login");
  const [path, setPath] = useState("/login");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setHome("Home");
      setPath("/");
    } else {
      setHome("Login");
      setPath("/login");
    }
  }, [location.pathname]);

  return (
    <div className="flex justify-center">
      <div className="bg-white text-black h-16 w-[130vh] rounded-3xl px-10 items-center flex justify-between border-1 border-[#272525]">
        <h1 className="text-2xl font-[font1]">Notes.Io</h1>
        <Link to={path} className="py-2 px-10 border-[1px] rounded-3xl">{home}</Link>
      </div>
    </div>
  );
};

export default Navbar;
