import { MouseEvent, useContext, useState } from "react";
import { useQuery } from "react-query";
import { SolicitacaoContext } from "../../context/contextoFormulario";
import { IEspecie } from "../../Interfaces/Especie";
import { obterEspecies } from "../../service/api";
import ButtonEspecie from "../ButtonEspecie";

type IInputEspecie = {
  name: string;
  label: string;
  refe: string;
}

const InputEspecie = ({ name, label, refe }: IInputEspecie) => {
  const { dispatch } = useContext(SolicitacaoContext);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [offset, setOffset] = useState(0);

  const { data, isLoading } = useQuery(['obterEspecies', offset], () => obterEspecies(offset), {
    keepPreviousData: true
  });

  const previusPage = () => setOffset((old) => old - 20)
  const nextPage = () => setOffset((old) => old + 20)

  const setarEspecie = (e: MouseEvent<HTMLButtonElement>, nomeEspecie: string) => {
    e.preventDefault();
    dispatch({
      type: `ATUALIZAR_${refe}`,
      payload: {
        [name]: nomeEspecie
      }
    })
    setMostrarPopup(false);
  }
  console.log(data)

  const renderizarEspecies = () => (
    <>
      {data.results.map(({name}: IEspecie) => (
        <ButtonEspecie key={name} name={name} onClick={setarEspecie} />
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