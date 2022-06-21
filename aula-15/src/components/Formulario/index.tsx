import { Link } from "react-router-dom";
import pikachu from "../../assets/pikachu.png";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import Input from "../Input";
import InputEspecie from "../InputEspecie";
import Select from '../Select';
import Detalhe from "./detalhe";

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
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input type="text" refe="TREINADOR" name="nome" label="Nome" />
              <Input type="text" refe="TREINADOR" name="sobrenome" label="Sobrenome" />
              <Input type="email" refe="TREINADOR" name="email" label="Email" />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input refe="POKEMON" type="text" name="nomePokemon" label="Nome" />
              <Select refe="POKEMON" name="tipoPokemon" label="Tipo pokemon" />
              <Input refe="POKEMON" type="text" name="elemento" label="Elemento" />
              <Input refe="POKEMON" type="text" name="altura" label="Altura" />
              <Input refe="POKEMON" type="text" name="idade" label="Idade" />
              <InputEspecie refe="POKEMON" name="especiePokemon" label="Especie" />
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

export default Formulario;
