import { useState, useEffect } from 'react';
import axios from 'axios';

const useInventory = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const apiUrl = 'https://fakestoreapi.com/products';

  // Fetch products from FakeStoreAPI
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Add a new product
  const addProduct = async (product) => {
    try {
      const response = await axios.post(apiUrl, product);
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setMessage('Product added successfully!');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Remove a product
  const removeProduct = async (productId) => {
    try {
      await axios.delete(`${apiUrl}/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
      setMessage('Product removed successfully!');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return {
    products,
    addProduct,
    removeProduct,
    message,
  };
};

export default useInventory;
