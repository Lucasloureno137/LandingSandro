import React from 'react';
import './TextSection.css'; 


import icone1 from '../assets/icone1.png'; 
import icone2 from '../assets/icone2.png'; 

const TextSection: React.FC = () => {
  return (
    <div className="text-section">
      <div className="text-container">
        <h2 className="text-left">
          Aconselhamento jurídico pessoal e empresarial
        </h2>
        <p className="text-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua vero eos et accusam et justo duo.
        </p>
      </div>
      <div className="icon-texts">
        <div className="icon-text">
          <img src={icone1} alt="Icon 1" className="icon" />
          <h3>Obtenha seu aconselhamento jurídico</h3>
          <p className="icon-text-content">Nosso objetivo é fornecer a você o melhor aconselhamento jurídico possível para resolver suas questões com segurança e eficiência. Trabalhando lado a lado com você, nossa equipe de advogados oferece orientação clara e estratégica para ajudar a tomar decisões informadas. Sejam dúvidas sobre contratos, litígios ou planejamento jurídico, você pode confiar em nossa expertise para encontrar soluções adequadas e proteger seus direitos.</p>
        </div>
        <div className="icon-text">
          <img src={icone2} alt="Icon 2" className="icon" />
          <h3>trabalhe com especialistas</h3>
          <p className="icon-text-content">Conte com nossa equipe de advogados especializados em diversas áreas do direito para oferecer soluções jurídicas personalizadas e eficientes. Com uma vasta experiência e um compromisso inabalável com a excelência, nossos especialistas estão prontos para ajudar você a superar desafios legais e alcançar seus objetivos. Seja em questões corporativas, familiares ou pessoais, garantimos um atendimento profissional e dedicado para proteger seus interesses.</p>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
