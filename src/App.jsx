
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


  return (
    <>
    <div className='cards'>
      <Card item={item1}/>
      <Card item={item2}/>
      <Card item={item3}/>
    </div>
    </>
  )
}

export default App
