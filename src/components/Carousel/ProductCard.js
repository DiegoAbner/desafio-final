import React from 'react';
import './ProductCarousel.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.title}</p>
      <p>R${product.price.toFixed(2)}</p>
      <button className="buy-button">Comprar</button>
    </div>
  );
}

export default ProductCard;
