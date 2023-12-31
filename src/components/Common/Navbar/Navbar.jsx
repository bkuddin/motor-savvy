import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/motor-savvy-logo.png";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import "./Navbar.css";

export const Navbar = () => {  
  const { user, logOut } = useContext(AuthContext);
  // State for Mobile Menu Open & Close
  const [menuOpen, setMenuOpen] = useState(false);
  // State for Change nav color when Scroll Down
  const [color, setColor] = useState("transparent");

  // Theme Daylight
  const [theme, setTheme] = useState('light-theme')
    const handleClick = () => {
        console.log('click');
        if (theme === 'dark-theme') {
            setTheme('light-theme')
        }
        else {
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

     // Theme Daylight End

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#F2F2F2");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 font-bold ease-in duration-300 px-20"
    >
      <Link to="/" className="title flex items-center">
        <img className="w-1/4" src={logo} alt="" />      
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
        
        <li>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </li>

        {user ? (
          <ol className="flex justify-center items-center -mt-1">
            <li className="">
              <button onClick={logOut}>Log Out</button>
            </li>
            <li>
              <img
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </li>
            
          </ol>
        ) : (
          <li className="bg-[#2B1B9A] rounded-lg  ">
            <NavLink className="text-white mr-2 " to="/login">
              Sign In
            </NavLink>
          </li>
        )}

        <li>  {/* Daylight Button */}
      <button onClick={handleClick}>Light</button></li>
      </ul>

    
    </nav>
  );
};
