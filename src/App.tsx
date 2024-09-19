

import React from 'react';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection'; 
import './App.css'; 

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

      <footer>
        <p>© 2024 Advogados. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
