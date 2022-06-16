import React, { useContext, useState } from "react";

import { SolicitacaoContext } from "../../context/contextoFormulario";


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

    dispatch({
      type: `ATUALIZAR_${refe}`,
      payload: {
        [name]: solicitacaoValue
      }
    })
  };


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

export default Input;
