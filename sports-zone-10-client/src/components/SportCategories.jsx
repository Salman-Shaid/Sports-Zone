import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const SportCategories = () => {
  const [categories, setCategories] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://sports-zone-a10-server.vercel.app/equipment");
        if (!response.ok) {
          throw new Error("Failed to fetch equipment data");
        }

        const data = await response.json();
        setEquipments(data);

        
        const uniqueCategories = [
          ...new Set(data.map((item) => item.categoryName)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const getRandomGradient = () => {
    const gradients = [
      "bg-gradient-to-r from-red-500 to-yellow-500",
      "bg-gradient-to-r from-green-400 to-blue-500",
      "bg-gradient-to-r from-purple-600 to-pink-500",
      "bg-gradient-to-r from-teal-400 to-blue-600",
      "bg-gradient-to-r from-indigo-500 to-purple-600",
      "bg-gradient-to-r from-orange-500 to-red-600",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Sports Categories</h1>
      
     
      {error && <p className="text-red-500 text-center">{error}</p>}

     
      {loading ? (
        <div className="text-center">
          <div className="spinner border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${category}`}>
                <button
                  className={`relative p-4 cursor-pointer h-32 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full ${getRandomGradient()}`}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <h3 className="text-3xl text-white font-bold">{category}</h3>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SportCategories;
