import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../AuthProvider/ThemeProvider'; 

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://sports-zone-a10-server.vercel.app/equipment')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="my-20">
        <h2 className="text-center text-2xl font-bold mb-10">Featured Products</h2>
        <p className="text-center text-gray-500"><span class="loading loading-spinner loading-lg"></span></p>
      </section>
    );
  }

  
  const limitedProducts = products.slice(0, 6);

  return (
    <section className="my-10 max-w-11/12">
      <h2 className="text-center text-2xl font-bold mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {limitedProducts.length > 0 ? (
          limitedProducts.map((product) => (
            <div
              key={product._id}
              className={`shadow-lg rounded-lg p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} hover:shadow-xl transition-shadow`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">{product.itemName}</h3>
              <p className="text-gray-600">Price : ${product.price}</p>
              <p className="text-gray-600">Rating : 5/{product.rating}</p>
              <NavLink to={`/equipment/${product._id}`}>
                <button className="btn btn-outline btn-error mt-4">
                  View Details
                </button>
              </NavLink>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products available.
          </p>
        )}
      </div>
      <NavLink to="/allEquipments"><button className='btn btn-outline btn-error block mx-auto my-10 w-full'>View More</button></NavLink>
    </section>
  );
};

export default ProductSection;
