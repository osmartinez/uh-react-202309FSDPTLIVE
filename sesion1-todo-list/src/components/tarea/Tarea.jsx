import AccionesTarea from "../accionesTarea/AccionesTarea";
import './Tarea.css'

import TimeAgo from 'timeago-react';


function Tarea({ tarea, onTareaCambiada, onTareaBorrada }) {

    function cambiarEstado(e) {
        onTareaCambiada(tarea)
        console.log("estado cambiado en tarea...")
    }

    function borrar() {
        onTareaBorrada(tarea)
    }

    return (
        <li>
            {/* <AccionesTarea></AccionesTarea> */}
            <button onClick={borrar}> {tarea.borrado === null ? '🗑️' : '🔁'}</button>

            {tarea.borrado === null ?
                <input
                    type="checkbox"
                    checked={tarea.hecha}
                    onChange={cambiarEstado}>
                </input> :
                ''}

            <label
                className={[(tarea.hecha ? 'tarea-hecha' : 'tarea-pendiente'), (tarea.borrado === null ? '' : 'tarea-eliminada')].join(' ')}>
                {tarea.texto}
            </label>

            {tarea.borrado === null ? '' :
                <>
                    <label className="texto-eliminado"> eliminado <TimeAgo
                        datetime={tarea.borrado}
                        locale="es"
                        live={false}></TimeAgo>
                    </label>
                </>

            }

        </li>
    )
}

export default Tarea