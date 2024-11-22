import React from 'react';
import './FormularioDeContato.css';

const FormularioDeContato: React.FC = () => {
  return (
    <div className="formulario-de-contato">
      <h2>Fale com o Suporte</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label htmlFor="motivo">Motivo do Contato</label>
          <textarea id="motivo" rows={4} placeholder="Explique o motivo do contato"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioDeContato;
