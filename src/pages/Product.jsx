// src/pages/Product.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  // 1. Grab the ID from the URL (/product/:id)
  const { id } = useParams();

  // 2. Fetch the specific product (assuming you have a hook for a single product)
  // const { product, loading } = useSingleProduct(id); 

  return (
    <div className="single-product-page">
      <h1>Viewing Product ID: {id}</h1>
      {/* Build out your image gallery, title, price, and Add to Cart button here */}
    </div>
  );
};

export default Product;