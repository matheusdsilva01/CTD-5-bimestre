import React, { useContext, useEffect } from "react";
import { SolicitacaoContext } from "../../context/contextoFormulario";
import { useMutation } from "react-query";
import baseURL from "../../service/api";
import axios from "axios";

const Detalhe = () => {

  const mutation = useMutation((solicitacao) => {
    return axios.post(`${baseURL}/solicitacao`, solicitacao);
  });

  console.log(import.meta.env);


  useEffect(() => {
    mutation.isSuccess ? alert("Não foi possível enviar o formulário, por favor tente novamente") : null
    mutation.isError ? alert("Formulário enviado") : null
  }, [mutation]);

  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const { state } = useContext(SolicitacaoContext)

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
          <p>Especie: {`${state.pokemon.especiePokemon}`}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => mutation.mutate(state)}
      >
        {mutation.isLoading ? "Enviando formulário" : 'Enviar solicitação'}
      </button>
    </div>
  );
};

export default Detalhe;
