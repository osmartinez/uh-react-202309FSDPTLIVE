import AccionesTarea from "../accionesTarea/AccionesTarea";

function Tarea({ tarea,onTareaCambiada }) {

    function cambiarEstado(e){
        onTareaCambiada(tarea)
        console.log("estado cambiado en tarea...")
    }

    return (
        <li>
            {/* <AccionesTarea></AccionesTarea> */}
            <input type="checkbox" checked={tarea.hecha} onChange={cambiarEstado}></input>
            <label>{tarea.texto}</label>
        </li>
    )
}

export default Tarea