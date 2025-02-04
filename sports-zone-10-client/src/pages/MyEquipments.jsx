import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider'; 
import { NavLink, useNavigate } from 'react-router-dom'; 
import { MdDeleteForever, MdOutlineSystemUpdateAlt } from "react-icons/md";

const MyEquipments = () => {
  const { user } = useContext(authContext); 
  const [equipments, setEquipments] = useState([]); 
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (user) {
      fetch('https://sports-zone-a10-server.vercel.app/equipment') 
        .then((res) => res.json())
        .then((data) => {
          const filteredEquipments = data.filter(
            (equipment) => equipment.userEmail === user.email
          );
          setEquipments(filteredEquipments); 
        })
        .catch((error) => console.error('Error fetching equipments:', error));
    }
  }, [user]); 

  const handleDelete = (equipmentId) => {
    if (window.confirm('Are you sure you want to delete this equipment?')) {
      fetch(`https://sports-zone-a10-server.vercel.app/equipment/${equipmentId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Equipment deleted successfully');
            setEquipments(equipments.filter((equip) => equip._id !== equipmentId));
          } else {
            alert('Failed to delete the equipment');
          }
        })
        .catch((error) => console.error('Error deleting equipment:', error));
    }
  };

  const handleViewDetails = (equipmentId) => {
    navigate(`/update/${equipmentId}`); 
  };

  return (
    <div className="p-8">
      {user ? (
        <div>
          <h1 className="text-2xl font-bold text-center">
            Welcome, {user.displayName || "User"}!
          </h1>
          <p className="mt-2 text-center">Your email: {user.email}</p>
          <p className='text-xl font-semibold text-center'>My Equipments</p>

          {equipments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {equipments.map((equipment) => (
                <div key={equipment._id} className="card bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col">
                  <img
                    src={equipment.image}
                    alt={equipment.itemName}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-semibold text-white">{equipment.itemName}</h3>
                    <p className="mt-2 text-gray-300">{equipment.description}</p>
                    <p className="mt-4 text-white">Price: ${equipment.price}</p>
                    <p className="text-yellow-400">Rating: {equipment.rating} / 5</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      className="btn btn-outline btn-error w-full sm:w-auto"
                      onClick={() => handleViewDetails(equipment._id)} 
                    >
                     <MdOutlineSystemUpdateAlt size={20} /> Update
                    </button>
                    
                    <button
                      className="btn bg-red-600 w-full sm:w-auto"
                      onClick={() => handleDelete(equipment._id)}
                    >
                      <MdDeleteForever size={20}/> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white mt-8">No equipment added by you.</p>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">You are not logged in!</h1>
        </div>
      )}
    </div>
  );
};

export default MyEquipments;
