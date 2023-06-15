import React, { useState } from 'react';
import './Pagamento.css'; // Importe o arquivo CSS fornecido
import { Link } from 'react-router-dom';




function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);

    if (method === 'cartao') {
      setShowCreditCardForm(true);
    } else {
      setShowCreditCardForm(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar o método de pagamento selecionado
    console.log('Método de pagamento:', paymentMethod);
  };

  return (
    <div className="container-payment">
      <div className="form">
        <h1>Pagamento</h1>
        <form onSubmit={handleSubmit}>
          <div className="payment-methods">
            <button
              type="button"
              className={`payment-method ${paymentMethod === 'boleto' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('boleto')}
            >
              Boleto
            </button>
            <button
              type="button"
              className={`payment-method ${paymentMethod === 'cartao' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('cartao')}
            >
              Cartão de Crédito
            </button>
          </div>

          {showCreditCardForm && (
            <div>
              <label htmlFor="cardNumber">Número do Cartão:</label>
              <input type="text" id="cardNumber" name="cardNumber" />

              <label htmlFor="cardName">Nome no Cartão:</label>
              <input type="text" id="cardName" name="cardName" />

              <label htmlFor="expirationDate">Data de Expiração:</label>
              <input type="text" id="expirationDate" name="expirationDate" />

              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" />
            </div>
          )}

<span className='teste'><Link to='/purchase' className="checkout-button" >
        Comprar
      </Link></span>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;


/*
function AddressForm() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do endereço:', { country, state, city, zipCode, street, number });
  };

  return (
    <div className="container-address">
      <div className="form">
        <h1>Pagamento</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="country"></label>
          <input placeholder='País'
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <label htmlFor="state"></label>
          <input placeholder='Estado'
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          <label htmlFor="city"></label>
          <input placeholder='Cidade'
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label htmlFor="zipCode"></label>
          <input placeholder='CEP'
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />

          <label htmlFor="street"></label>
          <input placeholder='Rua'
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <label htmlFor="number"></label>
          <input placeholder='Número'
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

<span className='teste'><Link to='/purchase' className="checkout-button" >
        Comprar
      </Link></span>
        </form>
      </div> 
    </div>
  );
}

export default AddressForm;
*/