
import './App.css'
import Card from './components/Card/Card'


function App() {
 const item1 = {
  name:'Rick Sanchez',
  image: 'http://rickandmortyapi.com/api/character/avatar/1.jpeg'

}
  const item2 = {
  name:'Beth Smith',
  image: 'http://rickandmortyapi.com/api/character/avatar/4.jpeg'

}
const item3 = {
  name:'Morty Smith',
  image: 'http://rickandmortyapi.com/api/character/avatar/2.jpeg'

}
const itens = [item1,item2,item3]

  return (
    <>
    <div className='cards'>
      {/* <Card item={itens[0]}/>
      <Card item={itens[1]}/>
      <Card item={itens[2]}/> */}
      {itens.map(item => <Card item={item}/>)}
    </div>
    </>
  )
}

export default App
