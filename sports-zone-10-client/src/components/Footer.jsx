import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/footerlogo.png';
import { ThemeContext } from "../AuthProvider/ThemeProvider";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-orange-200 text-gray-800"}`}>
            <footer className={`footer ${theme === "dark" ? "bg-gray-800" : "bg-orange-200"} p-10 justify-around`}>
                <nav>
                    <aside>
                        <img className='max-w-40' src={logo} alt="Logo" />
                        <h3 className="font-bold">
                            <p className='mt-2'>Providing reliable <br /> sports equipments since 1992</p>
                        </h3>
                    </aside>
                </nav>

                <nav>
                    <h6 className="footer-title">Equipments Categories</h6>
                    <a className="link link-hover">Cricket Equipments</a>
                    <a className="link link-hover">Football Equipments</a>
                    <a className="link link-hover">Gym Equipments</a>
                    <a className="link link-hover">Yoga Equipments</a>
                    <NavLink to="" className="link link-hover">See More</NavLink>
                </nav>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">All Equipments</a>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Register</a>
                </nav>

                <nav>
                    <h6 className="footer-title lg:mr-20">Social</h6>
                    <div className="flex flex-col gap-2">
                        <a>
                        <FaFacebook size={32} />
                        </a>
                        <a>
                        <FaYoutube size={32} />
                        </a>
                        <a>
                        <FaInstagram size={32} />
                        </a>
                    </div>
                </nav>
            </footer>

            <footer className={`text-center ${theme === "dark" ? "bg-gray-800" : "bg-orange-200"} text-base-content border-base-300 border-t-2 px-10 py-4`}>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
