import React, { useContext } from "react";
import { SolicitacaoContext } from "../../context/contextoFormulario";


const Detalhe = () => {

  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const { state } = useContext(SolicitacaoContext)
 console.log(state)

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome:{`${state.treinador.nome}`}</p>
          <p>Sobrenome:{`${state.treinador.sobrenome}`}</p>
          <p>Email:{`${state.treinador.email}`}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome:{`${state.pokemon.nomePokemon}`}</p>
          <p>Tipo pokemon:{`${state.pokemon.tipoPokemon}`}</p>
          <p>Elemento:{`${state.pokemon.elemento}`}</p>
          <p>Altura:{`${state.pokemon.altura}`}</p>
          <p>Idade:{`${state.pokemon.idade}`}</p>
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
