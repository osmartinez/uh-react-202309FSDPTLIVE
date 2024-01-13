
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
    const arrayCambiado = []
    
    for(const tarea of tareas){
      if(tarea.texto === tareaCambiar.texto){
        arrayCambiado.push({...tarea,hecha: !tarea.hecha})
      }
      else{
        arrayCambiado.push(tarea)
      }
    }

    setTareas(arrayCambiado)
  }

  
  function borrarTarea(tareaBorrar){
    setTareas(tareas.filter(t=> t.texto!==tareaBorrar.texto))
  }

  function borrarTareaSoft(tareaBorrar){
    setTareas(tareas.map(t=>{
      if(t.texto === tareaBorrar.texto){
        if(t.borrado !== null){
          t.borrado = null
        }
        else{
          t.borrado = new Date()
        }
      }
      return t
    }))
  }

  return (
    <>
      <h1>Lista de tareas ({tareas.filter(x=> x.borrado ===null).length})</h1>
      <h5>Completadas: {tareas.filter(x=> x.borrado ===null).filter(x=>x.hecha).length}</h5>
      <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
      <ListaTareas onTareaBorrada={borrarTareaSoft} onTareaCambiada={cambiarEstadoTarea} tareas={tareas.filter(t=>t.borrado === null)}></ListaTareas>
      <hr />
      <h3>Tareas eliminadas ({tareas.filter(x=> x.borrado !==null).length})</h3>
      <ListaTareas onTareaBorrada={borrarTareaSoft} onTareaCambiada={cambiarEstadoTarea} tareas={tareas.filter(t=>t.borrado !== null)}></ListaTareas>

    </>
  )
}

export default App
