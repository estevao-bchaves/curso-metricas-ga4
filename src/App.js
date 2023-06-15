import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Checkout from './components/Checkout/Checkout';
import Purchase from './components/Purchase/Purchase';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Endereco from './components/Endereco/Endereco';
import Pagamento from './components/Pagamento/Pagamento'
 


import { EcommerceProvider } from './EcommerceContext';
import './App.css';

const App = () => {
  return (
    <EcommerceProvider>
      <div>
        <Header />
    


        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
      </div>

    </EcommerceProvider>
  );
};

export default App;