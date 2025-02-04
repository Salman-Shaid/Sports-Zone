import { useContext } from 'react';
import Swal from 'sweetalert2';
import { authContext } from '../AuthProvider/AuthProvider';  

const AddEquipments = () => {
    const { user } = useContext(authContext);  

    const handleAddEquipment = (event) => {
        event.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const rating = form.rating.value;

        
        const userEmail = user?.email;
        const userName = user?.displayName;

        const newEquipment = { 
            image, 
            itemName, 
            categoryName, 
            description, 
            price, 
            customization, 
            processingTime, 
            stockStatus, 
            rating, 
            userEmail,   
            userName      
        };
        console.log(newEquipment);

        
        fetch('https://sports-zone-a10-server.vercel.app/equipment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newEquipment),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch((error) => {
            console.error('Error adding equipment:', error);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Error adding equipment',
                showConfirmButton: true,
            });
        });
    };

    return (
        <div className="w-full max-w-5xl mx-auto mt-8 p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-blue-500 to-yellow-500 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold text-center mb-6">Add Equipment</h2>

            <form onSubmit={handleAddEquipment} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Image URL" name="image" type="url" required />
                <InputField label="Item Name" name="itemName" type="text" required />
                <InputField label="Category Name" name="categoryName" type="text" required />
                <InputField label="Price" name="price" type="number" required />
                <InputField label="Rating (1-5)" name="rating" type="number" min="1" max="5" required />
                <InputField label="Customization" name="customization" type="text" />
                <InputField label="Processing Time (in days)" name="processingTime" type="number" required />
                <InputField label="Stock Status" name="stockStatus" type="number" required />
                
                <div className="col-span-2">
                    <TextareaField label="Description" name="description" required />
                </div>

                <div className="form-control my-8 col-span-2">
                    <button type="submit" className="btn btn-outline btn-error w-full">
                        Add Equipments
                    </button>
                </div>
            </form>
        </div>
    );
};


const InputField = ({ label, name, type, value, onChange, required, min, max }) => {
    return (
        <div className="form-control mb-4">
            <label className="label">
                <span className="label-text text-white">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="input input-bordered w-full text-black p-3" // Full width and padding for mobile
                required={required}
                min={min}
                max={max}
            />
        </div>
    );
};


const TextareaField = ({ label, name, value, onChange, required }) => {
    return (
        <div className="form-control mb-4">
            <label className="label">
                <span className="label-text text-white">{label}</span>
            </label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="textarea textarea-bordered w-full text-black p-3" // Full width and padding for mobile
                required={required}
            />
        </div>
    );
};

export default AddEquipments;
