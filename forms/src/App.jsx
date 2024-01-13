import { useEffect, useState } from "react"
import Formulario from "./components/form/Formulario"
import Item from "./components/item/Item"
import { Container, Row } from "react-bootstrap"


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/peliculas")
      .then((respuesta) =>
        respuesta.json()
          .then((datos) => {
            setItems(datos)
          }))
  }, [])

  function insertarItem(item) {
    fetch("http://localhost:3000/peliculas",{
      method: "POST",
      body: JSON.stringify(item),
    }).then(()=>{
      setItems([...items, item])
    }).catch((error)=>{
      alert("Error al subir la pelicula")
    })

    
  }

  return (
    <>
      <Formulario onInsertarItem={insertarItem} ></Formulario>

      <Container className="container-fluid flex">
        <Row>
          {items.map(i => <Item item={i}></Item>)}
        </Row>


      </Container>

    </>
  )
}

export default App
