import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css'
import ga4Image from '../../assets/img/ga4.jpg'


const Home = () => {

  var bodyText = "Este é um site de exemplo para o curso de Métricas do Google Analytics 4 oferecido pela Plataforma Solution.\
   Aqui estão as principais funcionalidades de um site de forma simplificada para facilitar o entendimento e a prática proposta.\
   Foi desenvolvido um ecommerce simples que simula um sebo e será disponibilizado a quem assistir ao curso.  "


  return (
   <div className='home'><div className="home-info">
       <div className="home-image">
        <img src={ga4Image} alt='ga4-image' className='ga4-image' />
      </div>

      <div className="home-text">
        <h2>{bodyText}</h2>
      </div>
      
    </div>
     <div className='div-button'><Link to="/sobre" className="home-saiba-mais">Saiba Mais</Link></div>
     </div>
     
  );
};

export default Home;