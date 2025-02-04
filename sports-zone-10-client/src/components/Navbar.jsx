import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import { ThemeContext } from "../AuthProvider/ThemeProvider";
import logo from "../assets/footerlogo.png";
import homeAnimation from "../assets/Animation - 1733654955753.json";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  
  const logout = () => {
    handleLogout();
    navigate("/login");
  };

  
  const homeOptions = {
    loop: true,
    autoplay: true,
    animationData: homeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  
  const navLinks = [
    { path: "/", label: "Home", icon: <Lottie options={homeOptions} height={20} width={20} /> },
    { path: "/allEquipments", label: "All Equipments" },
    { path: "/addEquipments", label: "Add Equipments" },
    { path: "/myEquipments", label: "My Equipments" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 shadow-md ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-orange-200 text-gray-800"
      }`}
    >
      <div className="navbar container mx-auto">
        
        <div className="navbar-start">
         
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map(({ path, label }, index) => (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => (isActive ? "active-link" : "")}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          
          <NavLink to="/">
            <img className="h-10" src={logo} alt="Brand Logo" />
          </NavLink>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks.map(({ path, label, icon }, index) => (
              <li key={index}>
                <NavLink to={path} className={({ isActive }) => (isActive ? "active-link" : "")}>
                  {icon && icon}
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end flex items-center gap-4">
          
          <label className="flex cursor-pointer gap-2 items-center">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="toggle theme-controller"
              aria-label="Toggle Theme"
            />
            <span className="sr-only">Toggle Theme</span>
          </label>

          
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                <img
                  className="w-10 rounded-full"
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User Avatar"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold">{user.displayName}</span>
                    <button
                      onClick={logout}
                      className="btn btn-error btn-sm w-full mt-2"
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="btn btn-neutral">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn btn-neutral">Register</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
