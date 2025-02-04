import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams(); 
  const [equipment, setEquipment] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    fetch(`https://sports-zone-a10-server.vercel.app/equipment/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch details for ID ${id}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setEquipment(data);
      })
      .catch((err) => {
        console.error("Error fetching equipment details:", err);
        setError(err.message); 
      });
  }, [id]);

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  
  if (!equipment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded-2xl my-20">
      <div className="border rounded-lg shadow-lg overflow-hidden mb-8">
        <img src={equipment.image} alt={equipment.itemName} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4">{equipment.itemName}</h2>
          <p className="text-lg text-gray-700 mb-2"><strong>Category:</strong> {equipment.categoryName}</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Description:</strong> {equipment.description}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Price:</strong> ${equipment.price}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Rating:</strong> {equipment.rating} / 5</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Customization:</strong> {equipment.customization}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Processing Time:</strong> {equipment.processingTime}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Stock Status:</strong> {equipment.stockStatus}</p>
        </div>
        
      </div>

      <Link to="/allEquipments"><button className='btn btn-outline btn-error w-full '>Back</button></Link>
    </div>
  );
};

export default ViewDetails;

