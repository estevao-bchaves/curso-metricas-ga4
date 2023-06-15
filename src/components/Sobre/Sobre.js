import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Sobre.css'



function InputComponent() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
    setTelefoneError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação do email
    if (!email.includes('@')) {
      setEmailError('Email inválido');
      return;
    }

    // Validação do telefone
    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone)) {
      setTelefoneError('Telefone inválido');
      return;
    }

    // Lógica de envio dos dados

    // Exibição da mensagem de sucesso
    setSubmitted(true);
  };

  const text = <div className="description">
  <p>
  O GA4 (Google Analytics 4) é uma versão atualizada e aprimorada da plataforma de análise de dados do Google, o Google Analytics. Lançado em outubro de 2020, o GA4 oferece recursos avançados de rastreamento e análise para ajudar os proprietários de sites e profissionais de marketing a entender melhor o comportamento dos usuários em suas propriedades digitais.

A principal diferença entre o GA4 e as versões anteriores do Google Analytics é a abordagem centrada no usuário. Enquanto as versões anteriores se concentravam principalmente em rastrear sessões e páginas, o GA4 coloca mais ênfase na análise do usuário individualmente, permitindo uma visão mais completa e holística do engajamento do usuário.

Algumas das principais características e aplicações do GA4 são: 

<p>Rastreamento de múltiplas plataformas: O GA4 permite rastrear o engajamento do usuário em diferentes plataformas, incluindo sites, aplicativos móveis e dispositivos conectados. Isso oferece uma visão unificada do comportamento do usuário em diferentes canais.</p>

<p>Eventos personalizados: Com o GA4, é possível definir eventos personalizados com base em ações específicas do usuário, como cliques em botões, reprodução de vídeos, envio de formulários, entre outros. Isso permite uma análise mais granular e personalizada do engajamento do usuário.</p>

<p>Funis de conversão aprimorados: O GA4 oferece funis de conversão mais flexíveis e avançados, permitindo que os usuários acompanhem e analisem o caminho completo que os usuários percorrem antes de realizar uma conversão desejada, como uma compra ou preenchimento de um formulário.</p>

<p>Integração com o Google Ads: O GA4 está integrado ao Google Ads, permitindo que os profissionais de marketing acompanhem melhor o desempenho das campanhas publicitárias e otimizem seus gastos com anúncios com base nos insights do GA4.</p>

<p>Essas são apenas algumas das principais aplicações do GA4. No geral, o GA4 oferece uma plataforma mais avançada e abrangente para análise de dados e entendimento do comportamento dos usuários, auxiliando as empresas a tomarem decisões mais informadas e estratégicas para melhorar a experiência do usuário e impulsionar resultados.</p>  </p>
 
</div>

  // Verifica se o formulário foi enviado com sucesso
  if (submitted) {
    return <div>{text}<div className='container'> <p className='newsletter-success'>Você está inscrito na nossa newsletter!</p></div></div>;
  }

  return (
    <div>
      {text}
      <div className='container'>
      <div className="form">
        <h1>Newsletter</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder='Nome' value={nome} className='input' onChange={handleNomeChange} />
          </label>
          <br />
          <label>
            <input type="text" placeholder='Telefone' className='input' value={telefone} onChange={handleTelefoneChange} />
          </label>
          {telefoneError && <p className='error'>{telefoneError}</p>}
          <br />
          <label>
            <input type="text" placeholder='Email' className='input' value={email} onChange={handleEmailChange} />
          </label>
          {emailError && <p className='error'>{emailError}</p>}
          <br />
          <button className='button' type="submit">Enviar</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default InputComponent;
