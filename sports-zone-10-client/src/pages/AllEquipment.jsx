import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { FcViewDetails } from "react-icons/fc";
import coverImg from "../assets/logo/cover.png"
const AllEquipment = () => {

    const loaderData = useLoaderData();
    const [equipments, setEquipments] = useState(loaderData); 
    const [sortOrder, setSortOrder] = useState("asc"); 
   
    const handleSortByPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });
        setEquipments(sortedEquipments);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc"); 
    };

    return (
        <>
        <img className='w-full h-32 object-cover' src={coverImg} alt="" />
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-orange-100 text-black'>
            <div className="flex justify-between items-center mb-4  flex-col sm:flex-row">
                <h2 className="text-2xl font-bold mb-2 sm:mb-0 py-8">All Equipment: {equipments.length}</h2>
                <button
                    onClick={handleSortByPrice}
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                    Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
                </button>
            </div>

            
            <div className="overflow-x-auto">
                <table className="table-auto w-full mb-8">
                    <thead>
                        <tr className='text-black'>
                            <th className="border-2 px-4 py-2 text-left">Name</th>
                            <th className="border-2 px-4 py-2 text-left">Category</th>
                            <th className="border-2 px-4 py-2 text-left">Price</th>
                            <th className="border-2 px-4 py-2 text-left">Stock</th>
                            <th className="border-2 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((item) => (
                            <tr key={item._id}>
                                <td className="border px-4 py-2">{item.itemName}</td>
                                <td className="border px-4 py-2">{item.categoryName}</td>
                                <td className="border px-4 py-2">${item.price}</td>
                                <td className="border px-4 py-2">{item.stockStatus}</td>
                                <td className="border px-4 py-2">
                                    <Link to={`/equipment/${item._id}`}>
                                        <button className="bg-orange-600 text-white px-4 py-2 rounded-3xl flex justify-center items-center block mx-auto">
                                            <FcViewDetails /> View Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AllEquipment;
