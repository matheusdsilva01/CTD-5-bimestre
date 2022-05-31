import React, { useContext, useState } from "react";
import { SolicitacaoContext } from "../../context/contextoFormulario";
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { obterTipoElemento } from "../../service/api";

const Input = ({ name, label, type, refe }) => {
  const [solicitacaoValue, setSolicitacaoValue] = useState("");


  const { dispatch } = useContext(SolicitacaoContext)
  /**
   * Aqui pego o evento do input e atualizo o estado local do input em um useState
   * @author Matheus Silva
   * @param {EventListener} event - Evento do input 
   * @returns {void}
   */
  const onChange = (e) => {
    let { value } = e.target;
    setSolicitacaoValue(value)
  };


  /**
   * Efetua o dispatch no context e atualiza o estado global
   * @author Matheus Silva
   * @param {EventListener} e - evento onBlur do input
   * @returns
   */
  const onBlur = (e) => {
    e.preventDefault();

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
    dispatch({
      type: `ATUALIZAR_${refe}`,
      payload: {
        [name]: solicitacaoValue
      }
    })
  };
  if (type === 'select') {
    const { data } = useQuery(
      "obterTipoElemento",
      obterTipoElemento
    );
    return (
      <>
        <div className="input-receptor">
          <label htmlFor={name}>{label}</label>
          <select
            name="tiposElement"
            value={solicitacaoValue}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
          >
            {data?.results.map(item => (
              <option value={item.name} key={item.name} > {item.name}</option>
            ))}
          </select>
        </div>
      </>

    )
  }


  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={solicitacaoValue}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text"
}
Input.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  refe: PropTypes.string.isRequired
}

export default Input;
