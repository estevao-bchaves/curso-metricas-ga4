import React from 'react';
import './Purchase.css';
import { Link } from 'react-router-dom'; // Importe o arquivo CSS fornecido

function ThankYouPage() {
  return (
    <div className="container-purchase">
      <div className="thank-you">
        <h1>Agradecemos pela sua compra!</h1>
        <p>Seu pedido foi realizado com sucesso.</p>
        <p>Em breve você receberá as informações de entrega.</p>
        <div><Link to='/' className="checkout-button">Voltar</Link></div>
      </div>
    </div>
  );
}

export default ThankYouPage;