import './formulario-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioEvento({ temas, onSubmit }) {

  function handleSubmit(formData){
    const evento = {
      capa: formData.get('capaEvento'),
      tema: temas.find(function (item) {
        return item.id == formData.get('temaEvento')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }

    onSubmit(evento)
  }

  return (
    <form className='form-evento' action={handleSubmit}>
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
          <Label htmlFor="capaEvento">
            Qual o endereço da imagem de capa?
          </Label>
          <CampoEntrada type="text" id='capaEvento' placeholder='http://...' name='capaEvento' />
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
          <ListaSuspensa id="temaEvento" name="temaEvento" itens={temas} />
        </CampoFormulario>
      </div>

      <div className="acoes">
        <Botao>
          Criar evento
        </Botao>
      </div>

    </form>
  )
}