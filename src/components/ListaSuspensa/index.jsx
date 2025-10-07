import './lista-suspensa.estilos.css'

export function ListaSuspensa ({ itens, ...rest }){
    return (
        <select {...rest} className='lista-suspensa-form' defaultValue="">
            <option value="" disabled className='lista-suspensa__options'>
                Selecione uma opção
            </option>
            {itens.map(function (item) {
                return <option className='lista-suspensa__options' key={item.id} value={item.id}>
                    {item.nome}
                </option>
            })}
        </select>
    )
}