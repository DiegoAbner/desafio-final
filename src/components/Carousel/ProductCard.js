import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.title}</p>
      <p>Valor: R$ {product.price}</p>
    
        <button className='button-add' onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
      
    </div>
  );
};

export default ProductCard;

