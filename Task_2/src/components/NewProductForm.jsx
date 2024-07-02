import React, { useState } from 'react';
import useInventory from '../hooks/UseInventory';

const NewProductForm = () => {
  const { addProduct, message } = useInventory();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && price) {
      const newProduct = {
        title,
        price: parseFloat(price),
      };
      await addProduct(newProduct);
      setTitle('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProductForm;
