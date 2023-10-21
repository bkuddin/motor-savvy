import React, { useEffect, useState } from "react";
import logo from '../../../assets/images/motor-savvy-black.png';

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  // State for Mobile Menu Open & Close 
  const [menuOpen, setMenuOpen] = useState(false);
  // State for Change nav color when Scroll Down
  const [color, setColor] = useState("transparent");
  

  useEffect(()=>{
    const changeColor = ()=>{
      if(window.scrollY >= 90){
        setColor("#F2F2F2");
       
      }else{
        setColor("transparent")
       
      }
    }
    window.addEventListener("scroll", changeColor);
  },[])

  return (
    <nav style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10   font-bold ease-in duration-300 px-20">
      <Link to="/" className="title flex items-center">
         <img className="w-1/4" src={logo} alt="" />
         <p className="text-black">Motor Savvy</p>
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
        <li className="bg-[#2B1B9A] rounded-lg  ">
          <NavLink className="text-white " to="/login">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
};