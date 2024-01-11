
import './App.css'
import InputTarea from './components/inputTarea/InputTarea'
import ListaTareas from './components/listaTareas/ListaTareas'
import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([
    { texto: "comprar pan", hecha: true, borrado: null },
    { texto: "comprar leche", hecha: false, borrado: null },
  ])

  function intentarAgregarTarea(textoTarea) {
    // tareas.push(textoTarea)

    if (textoTarea !== "" && tareas.find(x=> x.texto === textoTarea) === undefined) {
      setTareas([{texto: textoTarea, hecha: false, borrado:null}, ...tareas])
    }

  }

  function cambiarEstadoTarea(tareaCambiar){
    setTareas(tareas.map(t=>{
      if(t.texto === tareaCambiar.texto){
        return {...t, hecha: !t.hecha}
      }
      else{
        return t
      }
    }))
  }

  return (
    <>
      <h1>Lista de tareas ({tareas.length})</h1>
      <h5>Activas: {tareas.filter(x=>x.hecha).length}</h5>
      <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
      <ListaTareas onTareaCambiada={cambiarEstadoTarea} tareas={tareas}></ListaTareas>
    </>
  )
}

export default App
