import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { SolicitacaoContext } from "../../context/contextoFormulario";
import { obterEspecies } from "../../service/api";

const InputEspecie = ({ name, label, refe }) => {
  const { dispatch } = useContext(SolicitacaoContext);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [offset, setOffset] = useState(0);

  const {data, error, isLoading} = useQuery(['obterEspecies', offset], () => obterEspecies(offset), {
    keepPreviousData: true
  });

  const previusPage = () => setOffset((old) => old - 20)
  const nextPage = () => setOffset((old) => old + 20)

  const setarEspecie = (e, nomeEspecie) => {
    e.preventDefault();
    dispatch({
      type: `ATUALIZAR_${refe}`,
      payload: {
        [name]: nomeEspecie
      }
    })
    setMostrarPopup(false);
  }

  const renderizarEspecies = () => (
    <>
      {data.results.map((especie) => (
        <button
          key={especie.name}
          className="botoes-especie"
          onClick={(e) => setarEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-receptor">
      {mostrarPopup && (
        <div className="popup-especie">
          <h4>Selecionar espécie</h4>
          <button type="button" className="fechar-modal" onClick={() => setMostrarPopup(false)}>X</button>
          <div className="receptor-especies">{renderizarEspecies()}</div>
          <div className="paginacao">
            <button
              disabled={offset <= 0}
              onClick={() => previusPage()}
              className="botao-anterior">Anterior</button>
            <button
              disabled={offset >= data.count}
              onClick={() => nextPage()}
              className="botao-seguinte">Seguinte</button>
          </div>
        </div>
      )}
      <label htmlFor={name}>{label}</label>
      <button
        disabled={isLoading}
        className="botao-selecionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Selecionar
      </button>
    </div>
  );
};

export default InputEspecie;