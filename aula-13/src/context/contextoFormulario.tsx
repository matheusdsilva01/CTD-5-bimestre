import { useReducer, createContext } from "react";

export const SolicitacaoContext = createContext({} as any);

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
        idade: "",
        especiePokemon: ""
    }
}

/**
 * Função redutora redutora que recebe estado atual e as funções de dispatch
 * @param {initialState} state 
 * @param {*} action 
 * @returns 
 */
const reducer = (state, action) => {
    switch (action.type) {
        case "ATUALIZAR_TREINADOR":
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
    return (
        <SolicitacaoContext.Provider value={{ state, dispatch }} >
            {children}
        </SolicitacaoContext.Provider>
    )
}


export default SolicitacaoContextProvider;