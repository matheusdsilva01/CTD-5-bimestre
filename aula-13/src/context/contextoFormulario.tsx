import { createContext, PropsWithChildren, useReducer } from "react";

export const SolicitacaoContext = createContext({} as any);
interface IinitialState {
    treinador: {
        nome: string;
        sobrenome: string;
        email: string;
    };
    pokemon: {
        nomePokemon: string;
        tipoPokemon: string;
        elemento: string;
        altura: string;
        idade: string;
        especiePokemon: string;
    }
}

const initialState: IinitialState = {
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
        especiePokemon: "",
    }
}

interface IReducerAction {
    type: string;
    payload: object;
}


const reducer = (state: IinitialState, action: IReducerAction) => {
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
export const SolicitacaoContextProvider = ({children}: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SolicitacaoContext.Provider value={{ state, dispatch }} >
            {children}
        </SolicitacaoContext.Provider>
    )
}


export default SolicitacaoContextProvider;