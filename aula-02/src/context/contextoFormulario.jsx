import { createContext, useReducer, useState } from "react";

export const SolicitacaoContext = createContext();

const initialState = {
    treinador: {
        nome: "",
        sobrenome: "",
        email: "",
    },
    pokemon: {
        nomePokemon: "",
        tipoPokemon: "",
        elemento: "",
        altura: "",
        idade: ""
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ATUALIZAR_TREINADOR":
            console.log(action.payload)
            return {
                ...state,
                treinador: {
                    ...state.treinador,
                    ...action.payload
                }
            }
        case "ATUALIZAR_POKEMON":
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    ...action.payload
                }
            }
        default:
            return state
    }
}
export const SolicitacaoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [solicitacao, setSolicitacao] = useState({
    //     nome: "",
    //     sobrenome: "",
    //     email: "",
    //     nomePokemon: "",
    //     tipoPokemon: "",
    //     elemento: "",
    //     altura: "",
    //     idade: ""
    // });


    // const criarSolicitacao = (name, value) => {
    //     setSolicitacao({ ...solicitacao, [name]: value })
    // }


    return (
        <SolicitacaoContext.Provider value={{ state, dispatch }} >
            {children}
        </SolicitacaoContext.Provider>
    )
}


export default SolicitacaoContextProvider;