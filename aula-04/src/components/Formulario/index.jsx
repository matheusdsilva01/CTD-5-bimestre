import React from "react";
import { Link } from "react-router-dom";
import pikachu from "../../assets/pikachu.png";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import Input from "../Input";
import Detalhe from "./detalhe";

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          {/*
           Se ao menos tivéssemos uma maneira de "encapsular" nossos componentes
           para que possam acessar o estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input refe="TREINADOR" name="nome" label="Nome" />
              <Input refe="TREINADOR" name="sobrenome" label="Sobrenome" />
              <Input refe="TREINADOR" name="email" label="Email" type="email" />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input refe="POKEMON" name="nomePokemon" label="Nome" />
              <Input refe="POKEMON" name="tipoPokemon" label="Tipo pokemon" />
              <Input refe="POKEMON" name="elemento" label="Elemento" />
              <Input refe="POKEMON" name="altura" label="Altura" />
              <Input refe="POKEMON" name="idade" label="Idade" />
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

export default Formulario;
