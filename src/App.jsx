
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'


function App() {

  //carregamento de dados via API /backend

  const [itens, setItens] = useState([])
  async function carregarDadosApi() {
    const apiUrl = 'https://rickandmortyapi.com/api/character'
    const response = await fetch(apiUrl)
    //console.log(response)

    const body = await response.json()
    console.log(body)

    const results = body.results;

    //atualiza o estado itens com resultado da API
    setItens(results)

    //TODO enviar results para JSX exibindo um card para cada personagem
  }
  //usado para proteger a requisião à API e não ficar em loop infinito
  useEffect(function () {
    carregarDadosApi()
  }, [])


  return (
    <>
      <div className='cards'>


          {itens.map((item, i) => <Card item={item} key={i} />)}
        </div>
     
    </>
  )
}

export default App
