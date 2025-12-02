import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "blur-nav" : ""}`}>
      <div className="nav-left">
        <div className="logo-section">
          <img src={logo} alt="" className="logo" />
        </div>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "btn" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sedekahSampah"
              className={({ isActive }) => (isActive ? "btn" : "")}
            >
              Sedekah Sampah
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/edukasi"
              className={({ isActive }) => (isActive ? "btn" : "")}
            >
              Edukasi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) => (isActive ? "btn" : "")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <NavLink to="/login" className="signin-btn">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
