import { createContext, useState } from "react";

export const SolicitacaoContext = createContext();

export const SolicitacaoContextProvider = ({children}) => {
    const [solicitacao, setSolicitacao] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        nomePokemon: ""
    });


    const criarSolicitacao = (name, value) => {
        setSolicitacao({...solicitacao, [name]: value})
    }


    return (
        <SolicitacaoContext.Provider value={{criarSolicitacao, solicitacao}} >
            {children}
        </SolicitacaoContext.Provider>
    )
}


export default SolicitacaoContextProvider;