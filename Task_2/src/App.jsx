import React from 'react';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <NewProductForm />
      <ProductList />
    </div>
  );
};

export default App;

