import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 w-full z-10 text-white font-bold ease-in duration-300 px-20">
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu mr-5" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-product">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="/cart">My Cart</NavLink>
        </li>
      </ul>
      <ul className={menuOpen ? "open" : ""}>
      
        <li>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </li>
        <li className="bg-[#2B1B9A] rounded-lg ">
          <NavLink className="text-white" to="/sign-in">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
};