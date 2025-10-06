import "./botao.estilos.css"

export function Botao ({ children}) {
    return (
        <button className="botao-form">
            {children}
        </button>
    )
}
