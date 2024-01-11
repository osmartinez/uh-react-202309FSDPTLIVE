import Tarea from "../tarea/Tarea";


function ListaTareas({tareas,onTareaCambiada}){

    return(
        <ul>
            {tareas.map((x,idx)=> <Tarea onTareaCambiada={onTareaCambiada} key={idx} tarea={x}></Tarea>)}
        </ul>
    )
}

export default ListaTareas