import './formulario-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'

export function FormularioEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      
      <div className="campos">
        <CampoFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoEntrada type="text" id='nomeEvento' placeholder='Summer dev hits' name='nomeEvento' />
        </CampoFormulario>

        <CampoFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoEntrada type="date" id='dataEvento' name='dataEvento' />
        </CampoFormulario>

        <CampoFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento
          </Label>
          <CampoEntrada type="select" id='temaEvento' name='temaEvento' />
        </CampoFormulario>

        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  )
}