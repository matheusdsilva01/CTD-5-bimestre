import React, { useContext, useState } from "react";
import { obterTipoElemento } from "../../service/api";
import { useQuery } from 'react-query';
import { SolicitacaoContext } from "../../context/contextoFormulario";

export default function index({ name, label, refe }) {
    const { data, isLoading, isError } = useQuery(
        "obterTipoElemento",
        obterTipoElemento
    );

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
        <>
            <div className="input-receptor">
                <label htmlFor={name}>{label}</label>
                <select
                    disabled={isLoading || isError}
                    name="tiposElement"
                    value={solicitacaoValue}
                    id={name}
                    onChange={onChange}
                    onBlur={onBlur} >
                    {data?.results.map(item => (
                        <option value={item.name} key={item.name} > {item.name}</option>
                    ))}
                </select>
            </div>
        </>

    )
}