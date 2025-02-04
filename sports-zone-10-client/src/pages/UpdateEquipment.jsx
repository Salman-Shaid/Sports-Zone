import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const UpdateEquipment = () => {
    const { id } = useParams(); 
    const [equipment, setEquipment] = useState({
        itemName: '',
        description: '',
        price: '',
        rating: '',
        image: '',
        userEmail: '',
        userName: '',
    });
    const navigate = useNavigate(); 

    
    useEffect(() => {
        fetch(`https://sports-zone-a10-server.vercel.app/equipment/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setEquipment({
                        itemName: data.itemName,
                        description: data.description,
                        price: data.price,
                        rating: data.rating,
                        image: data.image,
                        userEmail: data.userEmail,
                        userName: data.userName,
                    });
                }
            })
            .catch((error) => console.error('Error fetching equipment:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (parseFloat(equipment.price) <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Price',
                text: 'Price must be a positive number.',
            });
            return;
        }

        
        fetch(`https://sports-zone-a10-server.vercel.app/equipment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(equipment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Equipment updated successfully") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Equipment updated successfully!',
                    }).then(() => {
                        navigate('/myEquipments'); 
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Update Failed',
                        text: 'Failed to update equipment. Please try again later.',
                    });
                }
            })
            .catch((error) => {
                console.error('Error updating equipment:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an error updating the equipment. Please try again.',
                });
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    
    const handleDelete = () => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://sports-zone-a10-server.vercel.app/equipment/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.message === 'Equipment deleted successfully') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Deleted!',
                                text: 'Your equipment has been deleted.',
                            }).then(() => {
                                navigate('/myEquipments'); 
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Delete Failed',
                                text: 'Failed to delete equipment. Please try again later.',
                            });
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting equipment:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'There was an error deleting the equipment. Please try again.',
                        });
                    });
            }
        });
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-center mb-8">Update Equipment</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="itemName" className="block text-white">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        name="itemName"
                        value={equipment.itemName}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-white">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={equipment.description}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-white">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={equipment.price}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="rating" className="block text-white">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={equipment.rating}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                        required
                        min="0"
                        max="5"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-white">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={equipment.image}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="userEmail" className="block text-white">User Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={equipment.userEmail}
                        readOnly
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="userName" className="block text-white">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={equipment.userName}
                        readOnly
                        className="w-full p-2 mt-2 text-gray-500 rounded"
                    />
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="btn btn-primary w-full py-2 px-4 bg-green-500 text-white rounded"
                    >
                        Update Equipment
                    </button>
                </div>
                <div>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleDelete}
                            className="w-full py-2 px-4 bg-red-600 text-white rounded"
                        >
                            Delete Equipment
                        </button>
                    </div>
                </div>
            </form>

            <NavLink to="/myEquipments/">
                <button className='btn btn-outline btn-wide btn-error block mx-auto my-8'>Back to My Equipments</button>
            </NavLink>

        </div>
    );
};

export default UpdateEquipment;
