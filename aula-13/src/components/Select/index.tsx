import { ChangeEvent, FocusEvent, JSXElementConstructor, Key, ReactElement, ReactFragment, useContext, useState } from "react";
import { useQuery } from 'react-query';
import { SolicitacaoContext } from "../../context/contextoFormulario";
import { obterTipoElemento } from "../../service/api";

type ISelectProps = {
    name: string;
    label: string;
    refe: string;
}
type IData = {
    nome: string;
}

export default function index({ name, label, refe }: ISelectProps) {
    const { data, isLoading, isError } = useQuery(
        "obterTipoElemento",
        obterTipoElemento
    );

    const [solicitacaoValue, setSolicitacaoValue] = useState("");
    const { dispatch } = useContext(SolicitacaoContext)
    /**
     * Aqui pego o evento do input e atualizo o estado local do input em um useState
     * @param {EventListener} e - Evento do input
     * @returns {void}
     */
    const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        let { value } = e.target;
        setSolicitacaoValue(value)
    };


    /**
     * Efetua o dispatch no context e atualiza o estado global
     * @author Matheus Silva
     * @param {EventListener} e - evento onBlur do input
     * @returns
     */
    const onBlur = (e: FocusEvent<HTMLSelectElement>) => {
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
                    {data?.results.map((item) => (
                        <option value={item.name} key={item.name} > {item.name}</option>
                    ))}
                </select>
            </div>
        </>

    )
}