
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


  return (
    <>
     <Card item={item1}/>
     <Card item={item2}/>
    </>
  )
}

export default App
