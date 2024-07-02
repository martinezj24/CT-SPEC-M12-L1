import React from 'react';
import useInventory from '../hooks/UseInventory';

const ProductList = () => {
  const { products, removeProduct, message } = useInventory();

  return (
    <div>
      <h2>Product List</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ margin: '5px 0' }}>
            {product.title} - ${product.price}
            <button onClick={() => removeProduct(product.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
