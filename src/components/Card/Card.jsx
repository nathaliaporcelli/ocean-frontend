function Card(props){

  const item = props.item

  //console.log(item)

    return (
        <>
        <div className='card'>
          <h2>{item.name}</h2>
          <p>ID: {item.id}</p>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
            <p>Gender:{item.gender}</p>
            <p>Origin: {item.origin.name}</p>
          <img src={item.image} />
         
        </div>
          
         
        </>
      )
}
export default Card