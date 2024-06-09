import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
   <div className="product-details">
    <h2 className="product-title">{product.title}</h2>
    <p>Price: ${product.price}</p>
    </div>
  </div>
);

export default ProductCard;