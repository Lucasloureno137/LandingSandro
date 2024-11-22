

import React from 'react';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection';
import Carousel from './components/Carousel'; 
import Footer from './components/Footer';
import PricingPlans from "./components/PricingPlans";
import FormularioDeContato from "./components/FormularioDeContato";
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

      

      <Carousel />
      <TextSection /> 
      
      <PricingPlans />
      <FormularioDeContato />

      <Footer />

    
    </div>
  );
};

export default App;
