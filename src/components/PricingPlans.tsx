import React from "react";
import "./PlanosDeAssinatura.css";

interface Plano {
  nome: string;
  preco: string;
  beneficios: string[];
}

const planos: Plano[] = [
  {
    nome: "Plano Básico",
    preco: "R$ 49,90/mês",
    beneficios: [
      "Consultoria inicial gratuita",
      "Acesso a artigos jurídicos",
      "Suporte por e-mail",
    ],
  },
  {
    nome: "Plano Profissional",
    preco: "R$ 99,90/mês",
    beneficios: [
      "Consultoria mensal ilimitada",
      "Análise de contratos simples",
      "Suporte por telefone e e-mail",
    ],
  },
  {
    nome: "Plano Premium",
    preco: "R$ 199,90/mês",
    beneficios: [
      "Consultoria jurídica personalizada",
      "Acompanhamento processual completo",
      "Suporte prioritário 24/7",
    ],
  },
];

const PlanosDeAssinatura: React.FC = () => {
  return (
    <div className="container-planos">
      <h2 className="titulo-planos">Escolha o Plano Ideal para Você</h2>
      <div className="cartoes-planos">
        {planos.map((plano, index) => (
          <div key={index} className="cartao-plano">
            <h3 className="nome-plano">{plano.nome}</h3>
            <p className="preco-plano">{plano.preco}</p>
            <ul className="lista-beneficios">
              {plano.beneficios.map((beneficio, idx) => (
                <li key={idx} className="item-beneficio">
                  {beneficio}
                </li>
              ))}
            </ul>
            <button className="botao-assinar">Assinar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanosDeAssinatura;
