import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h2>{product.title}</h2>
    <p>Price: ${product.price}</p>
  </div>
);

export default ProductCard;