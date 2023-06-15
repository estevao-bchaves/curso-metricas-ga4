import React, { createContext, useState } from 'react';
import product1 from './assets/img/image-1.jpg'
import product2 from './assets/img/image-2.jpg'

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
   const products = [
    {
      id: 'produto1',
      name: 'Livro usado: Memórias Póstumas de Brás Cubas',
      price: 19.99,
      image: product1,
      description: '"Memórias Póstumas de Brás Cubas" é um famoso romance escrito por Machado de Assis e publicado em 1881. \
      A obra é considerada uma das mais importantes da literatura brasileira e um marco do realismo. O livro conta a história de Brás Cubas, um narrador-defunto que decide escrever suas memórias após a morte. \
      Através de uma narrativa irônica e sarcástica, Brás Cubas relata sua vida, desde sua infância até sua morte, explorando temas como a sociedade, a hipocrisia, o amor e a morte.\
      O protagonista revela-se um personagem egoísta e cínico, que faz reflexões sobre a vida e a condição humana de forma provocativa e desafiadora. \
      "Memórias Póstumas de Brás Cubas" é uma obra que mistura elementos de comédia, tragédia e crítica social, tornando-se um clássico da literatura brasileira.'

    },
    {
      id: 'produto2',
      name: 'Disco usado: Secos & Molhados - Secos & Molhados',
      price: 24.99,
      image: product2,
      description: 'O álbum "Secos e Molhados" foi lançado em 1973 pela banda brasileira de mesmo nome. \
      Foi um marco na música popular brasileira, com influências do rock, da MPB e do teatro. O disco contém 11 faixas, incluindo os sucessos "Sangue Latino" e "O Vira". \
      As letras eram poéticas e carregadas de simbolismo, abordando temas como amor, morte e questões sociais.\
       A banda era conhecida por suas performances teatrais e figurinos extravagantes. "Secos e Molhados" se tornou um dos álbuns mais vendidos e influentes da música brasileira, marcando a história do rock nacional.'
    },
  ];

  const [ecommerceProducts, setEcommerceProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (id, quantity) => {
    const existingProduct = ecommerceProducts.find((product) => product.id === id);

    if (existingProduct) {
      const updatedProducts = ecommerceProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        }
        return product;
      });

      setEcommerceProducts(updatedProducts);

    } else {
      const newProduct = {
        id: id,
        name: products.find((product) => product.id === id).name,
        price: products.find((product) => product.id === id).price,
        image: products.find((product) => product.id === id).image,
        description: products.find((product) => product.id === id).description,
        quantity: quantity
      };

      setEcommerceProducts([...ecommerceProducts, newProduct]);
    }
  };

  const clearCart = () => {
    setEcommerceProducts([]);
  };

  return (
    <EcommerceContext.Provider
      value={{
        products,
        isOpen, 
        setIsOpen,
        setEcommerceProducts,
        ecommerceProducts,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};