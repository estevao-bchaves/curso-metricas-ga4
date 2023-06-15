import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { EcommerceContext } from '../../EcommerceContext';

const ProductDetail = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1); // State for quantity selection
  const { products, addToCart, setIsOpen } = useContext(EcommerceContext);
  
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(id, quantity)
    setIsOpen(true)    
  }

  const selectedProduct = products.find((product) => product.id === id);
  
  if (!selectedProduct) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>
      <div className="product-info">
        <h2>{selectedProduct.name}</h2>
        <h4>Descrição: </h4>{selectedProduct.description}
        <p>Preço: R${selectedProduct.price}</p>
       <div className='teste'> <div className="quantity-selection">
          <button className='button-remove' onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
          <button className='button-add' onClick={incrementQuantity}>+</button>
        </div></div>
        <button className='addToCart' onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductDetail;