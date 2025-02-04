import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import partnerLogo1 from "../assets/logo/ADIDAS.webp";
import partnerLogo2 from "../assets/logo/daRAZimages.png";
import partnerLogo3 from "../assets/logo/nike images.png";
import partnerLogo4 from "../assets/logo/nxzh9qdn664bfe542cee4_1716256340_420x420.webp";
import partnerLogo5 from "../assets/logo/pathao.png";
import partnerLogo6 from "../assets/logo/under armor.webp";
import partnerLogo7 from "../assets/logo/puma.webp";
import partnerLogo8 from "../assets/logo/reebok.jpg";

import { ThemeContext } from '../AuthProvider/ThemeProvider'; 

const PartnersSection = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <section className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} py-10 pb-20`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Our Trusted Partners
        </h2>
        <Marquee>
          <div className="flex justify-between gap-20">
            
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg ml-4">
              <img src={partnerLogo1} alt="Partner 1" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
            
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg">
              <img src={partnerLogo2} alt="Partner 2" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
           
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg">
              <img src={partnerLogo3} alt="Partner 3" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
            
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg">
              <img src={partnerLogo4} alt="Partner 4" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
            
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg">
              <img src={partnerLogo5} alt="Partner 5" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
            
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg">
              <img src={partnerLogo6} alt="Partner 6" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg">
              <img src={partnerLogo7} alt="Partner 7" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
            <div className="flex justify-center items-center bg-white p-6 rounded-full shadow-lg mr-8">
              <img src={partnerLogo8} alt="Partner 8" className="max-h-16 max-w-16 object-contain rounded-full" />
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default PartnersSection;
