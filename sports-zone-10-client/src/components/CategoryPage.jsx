import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";  // Import SweetAlert2

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        
        const response = await fetch("https://sports-zone-a10-server.vercel.app/equipment");
        console.log(response); // Check the response
    
        if (!response.ok) {
          throw new Error("Failed to fetch equipment data");
        }
    
        const data = await response.json();
        console.log(data); // Log fetched data
    
        setEquipments(data.filter((item) => item.categoryName === categoryName));
      } catch (err) {
        console.error("Error:", err);  // Log the error to the console
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchData();
  }, [categoryName]);

  const handleAddToCart = (equipmentName) => {
    // Show SweetAlert on button click
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${equipmentName} has been successfully added to your cart!`,
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">{categoryName} Equipment</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {loading ? (
        <div className="text-center">
          <div className="spinner border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          <p><span className="loading loading-spinner loading-lg"></span></p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {equipments.length > 0 ? (
              equipments.map((equipment) => (
                <div
                  key={equipment.id}
                  className="p-4 border rounded shadow-md hover:shadow-lg transition"
                >
                  <div className="mb-4">
                    <img
                      src={equipment.image || "/images/default-image.jpg"} // Fallback image if no image is available
                      alt={equipment.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{equipment.name}</h3>
                  <p className="text-gray-600">Category: {equipment.categoryName}</p>
                  <p className="text-gray-800 font-bold mb-2">Price: ${equipment.price}</p>
                  <p className="text-gray-600">{equipment.description}</p>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Processing Time: {equipment.processingTime}</p>
                    <p className="text-sm text-gray-500">Stock Status: {equipment.stockStatus}</p>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => handleAddToCart(equipment.name)}
                    className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No equipment found for this category.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
