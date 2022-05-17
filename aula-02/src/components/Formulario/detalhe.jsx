import React, { useContext } from "react";
import { SolicitacaoContext } from "../../context/contextoFormulario";


const Detalhe = () => {

  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const { solicitacao } = useContext(SolicitacaoContext)


  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome:{`${solicitacao.nome}`}</p>
          <p>Sobrenome:{`${solicitacao.sobrenome}`}</p>
          <p>Email:{`${solicitacao.email}`}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome:{`${solicitacao.nomePokemon}`}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
