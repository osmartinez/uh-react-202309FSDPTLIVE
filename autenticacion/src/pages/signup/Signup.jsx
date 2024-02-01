import { useState } from "react"
import axios from "axios"

export default function Signup() {

    const [datos, setDatos] = useState({ email: "", password: "", password2: "", rol: "user" })
    function registrar() {
        axios.post("http://localhost:3000/usuarios",datos)
        .then((respuesta)=>{
            console.log(respuesta)
        })
    }

    return (
        <>
            <h2>Registro</h2>
            {
                datos.password !== datos.password2 ? <p style={{ color: 'red' }}>
                    *Las contraseñas no coinciden
                </p> : ""
            }
            <input value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })} type="email" />
            <input value={datos.password} onChange={(e) => setDatos({ ...datos, password: e.target.value })} placeholder="clave" type="password" />
            <input value={datos.password2} onChange={(e) => setDatos({ ...datos, password2: e.target.value })} placeholder="repite clave" type="password" />
            <button disabled={datos.password !== datos.password2} onClick={registrar}>registrar</button>
        </>
    )
}