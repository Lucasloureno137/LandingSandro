import React from "react";
import "./Footer.css"; // Estilos dedicados ao rodapé (crie este arquivo para estilização)

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Rua dos Advogados, 123, Cascavel - PR</p>
        <p>Telefone: (45) 9 9953-0236 | Email: contato@advocacia.com</p>
        <p>&copy; 2024 Advogados. Todos os direitos reservados. FAG.</p>
      </div>
    </footer>
  );
};

export default Footer;
