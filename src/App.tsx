

import React from 'react';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection';
import Carousel from './components/Carousel'; // Importe o carrossel
import './App.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="text-above-buttons">
          <h2>Equipe de advogados</h2>
          <h2>prontos para qualquer</h2>
          <h2>situação</h2>
          <p>Obtenha aconselhamento jurídico de nossos advogados</p>
          <p>experientes</p>
        </div>
        <div className="button-container">
          <button className="cta-button">Agende uma Consulta</button>
          <button className="cta-button">Conheça Nossos Serviços</button>
        </div>
      </div>

      <TextSection /> 

      {/* Adicione o componente de carrossel aqui */}
      <Carousel />

      <footer>
        <p>Rua dos Advogados, 123, Cascavel - PR</p>
        <p>Telefone: (45) 9 9953-0236 | Email: contato@advocacia.com</p> 
        <p>&copy; 2024 Advogados. Todos os direitos reservados. FAG.</p>
        <a href="https://cdn.forms-content-1.sg-form.com/6816f5c0-a077-11ef-abed-9699e2e7938e">assa</a>
      </footer>
    </div>
  );
};

export default App;
