import { MouseEvent } from 'react';

interface ButtonEspecieProps {
    name: string;
    onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, name: string) => void;
}

const ButtonEspecie = ({ name, onClick }: ButtonEspecieProps) => {

    return (
        <button
            className="botoes-especie"
            onClick={(e) => onClick(e, name)}
        >
            {name}
        </button>
    )
}
export default ButtonEspecie;