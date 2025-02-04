import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeContext } from '../AuthProvider/ThemeProvider';
import { useContext } from "react";

const MainLayouts = () => {
    const { theme } = useContext(ThemeContext);


    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-orange-50 text-gray-900'}`}>
            <Navbar></Navbar>

            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>

            

            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;