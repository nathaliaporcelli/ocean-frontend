
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'


function App() {
  //carregamento de dados direto via codigo
//  const item1 = {
//   name:'Rick Sanchez',
//   image: 'http://rickandmortyapi.com/api/character/avatar/1.jpeg'

// }
//   const item2 = {
//   name:'Beth Smith',
//   image: 'http://rickandmortyapi.com/api/character/avatar/4.jpeg'

// }
// const item3 = {
//   name:'Morty Smith',
//   image: 'http://rickandmortyapi.com/api/character/avatar/2.jpeg'

// }
// const itens = [item1,item2,item3]

//carregamento de dados via API /backend

const [itens,setItens] = useState([])
async function carregarDadosApi(){
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

carregarDadosApi()

  return (
    <>
    <div className='cards'>
      {/* <Card item={itens[0]}/>
      <Card item={itens[1]}/>
      <Card item={itens[2]}/> */}
      {itens.map((item,i) => <Card item={item}key={i}/>)}
    </div>
    </>
  )
}

export default App
