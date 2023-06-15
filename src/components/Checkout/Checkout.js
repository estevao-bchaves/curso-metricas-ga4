import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../../EcommerceContext';
import './Checkout.css';

const Checkout = () => {
  const { ecommerceProducts, setEcommerceProducts } = useContext(EcommerceContext);

  const calculateTotal = () => {
    let total = 0;
    for (const product of ecommerceProducts) {
      total += product.quantity * product.price;
    }
    return total.toFixed(2);
  };
  let visibility = () => {if(ecommerceProducts.length !== 0){return 'visible'} else return 'not-visible'}
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-products">
    

        {ecommerceProducts.length !== 0 ? (
           
          ecommerceProducts.map((product) => (
            <div className="checkout-product" key={product.id}>
              <img src={product.image} alt={product.name} className="checkout-product-image" />
              <div className="checkout-product-details">
                <div className="checkout-product-name">{product.name}</div>
                <div className="checkout-product-price">R${product.price}</div>
                <div className="checkout-product-quantity">Quantidade: {product.quantity}</div>
                
              </div>
            </div>
          ))
        ) :  ( 
          <div className='checkout-voltar'><h3>Não há produtos no carrinho.</h3>
           <Link to='/produtos' className="checkout-button">Voltar</Link></div>
          
        )  }
      </div>
      <div className={visibility()}>
      <div className="checkout-total">Total: R$ {calculateTotal()}</div><span>
     <Link to='/endereco' className="checkout-button" onClick={() => setEcommerceProducts([])}>
        Continuar
      </Link></span>
    </div>
    </div>
  );
};

export default Checkout;