import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import product1 from '../../assets/img/image-1.jpg'
import product2 from '../../assets/img/image-2.jpg'

const ProductList = () => {
  return (
    <div className="product-list">
      <div data-name="Memórias Póstumas de Brás Cubas" data-id="li1-mpbc" data-variant="usado" data-item-list-name="product-list" data-item-list-id="1" data-price="19.99" data-category="Livro" data-brand="Machado de Assis" data-index="0" className="card">
        <img className="card-image" src={product1} alt="Product 1" />
        <div className="card-description">
          <h3>Livro usado: Memórias Póstumas de Brás Cubas</h3>
          <p>Brás Cubas narra primeiramente sua morte, enterro e diversos momentos de sua vida, desde eventos da sua infância, adolescência e fase adulta.</p>
        </div>
        <div className="card-price">R$19,99</div>
        <Link to="/produto/produto1" className="card-button">Detalhes</Link>
      </div>
      <div data-name="Secos e Molhados" data-id="vi1-sem" data-variant="usado" data-item-list-name="product-list" data-item-list-id="1" data-price="24.99" data-category="Vinil" data-brand="Secos e Molhados" data-index="1" className="card">
        <img className="card-image" src={product2} alt="Product 2" />
        <div className="card-description">
          <h3>Disco usado: Secos & Molhados - Secos & Molhados</h3>
          <p>Secos & Molhados é o álbum de estreia do grupo homônimo, lançado em agosto de 1973 unindo a poesia de diversos autores.</p>
        </div>
        <div className="card-price">R$24,99</div>
        <Link to="/produto/produto2" className="card-button">Detalhes</Link>
      </div>
    </div>
  );
};

export default ProductList;
