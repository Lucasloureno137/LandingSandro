import React, { useState } from "react";
import "./FormularioDeContato.css";

const FormularioDeContato: React.FC = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    alert("Sua mensagem foi enviada com sucesso!");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="container-formulario">
      <h2 className="titulo-formulario">Entre em Contato Conosco</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="email" className="label-formulario">
            Seu E-mail:
          </label>
          <input
            type="email"
            id="email"
            className="input-formulario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="mensagem" className="label-formulario">
            Sua Mensagem:
          </label>
          <textarea
            id="mensagem"
            className="textarea-formulario"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="botao-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioDeContato;
