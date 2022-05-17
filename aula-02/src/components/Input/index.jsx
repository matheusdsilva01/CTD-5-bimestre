import React, { useContext, useState } from "react";
import { SolicitacaoContext } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const [solicitacaoValue, setSolicitacaoValue] = useState("");


  const { criarSolicitacao } = useContext(SolicitacaoContext)
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.

  // Além disso, usaremos um estado local para lidar com o estado da input.

  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
    let {value} = e.target;
    setSolicitacaoValue(value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
    criarSolicitacao(name, solicitacaoValue)
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
