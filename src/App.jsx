import './App.css'
import { FormularioEvento } from './components/FormularioEvento'
import { Tema } from './components/Tema'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import { useState } from 'react'

function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png',
      tema: temas[5],
      data: new Date(),
      titulo: 'Summer Eletro Dev'
    }
  ])

  const validarData = (data) => {
    return data instanceof Date && !Number.isNaN(data.valueOf())
  }

  const validarEvento = (evento) => {
    return evento.titulo!='' && evento.tema != undefined && validarData(evento.data)
  }

  function adicionarEvento(evento) {
    if (evento.capa === '') {
      evento.capa = null
    }

    if (validarEvento(evento)) {
      setEventos([...eventos, evento])
    } else {
      alert(`Atenção!\nForam informados campos vazios ou valores inválidos.\nVerifique os dados e tente novamente!`)
    }
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo TecBoard" />
      </header>
      <Banner />
      <FormularioEvento temas={temas} onSubmit={adicionarEvento} />

      <section className="container">
        {temas.map(function (tema) {
          if (!eventos.some((evento) => {
            return evento.tema.id == tema.id
          })) {
            return null
          }

          return (
            <section key={tema.id}>
              <Tema tema={tema} />

              <div className="eventos">
                {
                  eventos
                    .filter(function (evento) { 
                      return evento.tema.id == tema.id 
                    })
                    .map(function (evento, index) { 
                      return <CardEvento evento={evento} key={index} /> 
                    })
                }
              </div>
            </section>
          )
        })}

      </section>

    </main>
  )
}

export default App
