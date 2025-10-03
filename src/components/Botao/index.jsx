import "./botao.estilos.css"

export function Botao ({ children, ...props }) {
    return (
        <button {...props} className="botao-form">
            {children}
        </button>
    )
}
