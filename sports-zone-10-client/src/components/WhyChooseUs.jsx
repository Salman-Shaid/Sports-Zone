import React, { useContext } from 'react';
import { FaShippingFast, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { ThemeContext } from '../AuthProvider/ThemeProvider'; 

const WhyChooseUs = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <section className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"} py-10`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div className={`p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}>
            <FaShippingFast className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className={`text-xl font-semibold mb-2`}>
              Fast Shipping
            </h3>
            <p className={`text-gray-600 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              We offer fast and reliable delivery to get your products to you quickly.
            </p>
          </div>

          
          <div className={`p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}>
            <FaShieldAlt className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className={`text-xl font-semibold mb-2`}>
              Secure Shopping
            </h3>
            <p className={`text-gray-600 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Our platform is secured with SSL encryption to ensure your data is safe.
            </p>
          </div>

          
          <div className={`p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}>
            <FaHeadset className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className={`text-xl font-semibold mb-2`}>
              24/7 Support
            </h3>
            <p className={`text-gray-600 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Our customer support team is available 24/7 to assist you with any questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
