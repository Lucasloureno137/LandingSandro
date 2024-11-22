import React from "react";
import "./Footer.css"; // Estilos dedicados ao rodapé (crie este arquivo para estilização)

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Rua dos Advogados, 123, Cascavel - PR</p>
        <p>Telefone: (45) 9 9953-0236 | Email: contato@advocacia.com</p>
        <p>&copy; 2024 Advogados. Todos os direitos reservados. FAG.</p>
        <a href="https://cdn.forms-content-1.sg-form.com/6816f5c0-a077-11ef-abed-9699e2e7938e" target="_blank" rel="noopener noreferrer">
          Formulário
        </a>
      </div>
    </footer>
  );
};

export default Footer;
