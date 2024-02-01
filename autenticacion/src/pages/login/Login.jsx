import { useContext, useState } from "react"
import { SessionContext } from "../../contexts/SessionContext"
import { Navigate } from "react-router-dom"
import axios from "axios"

export default function Login() {

    const [mensaje, setMensaje] = useState("")
    const [datos, setDatos] = useState({ email: "", password: "" })
    const { login, user } = useContext(SessionContext)

    function doLogin() {
        // no se hace así, lo estamos haciendo solamente para probar
        //login({...datos, password: null, rol: "user"})

        axios.post("http://localhost:3000/usuarios/login", datos)
            .then((respuesta) => {
                if (respuesta.data.token) {
                    // si viene token todo ok
                    login({ ...datos, password: null, rol: "user", token: respuesta.data.token })
                }
                else {
                    setMensaje(respuesta.data.msg)
                }

            })
    }

    // null es falsy
    if (user) { // if(user !== null && user !== undefined)
        return (
            <Navigate to='/area-privada'></Navigate>
        )
    }
    else {
        return (
            <>
                <h2>Login</h2>
                {
                    mensaje !== "" ? <p style={{ color: 'red' }}>
                        {mensaje}
                    </p> : ""
                }
                <input value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })} type="email" />
                <input value={datos.password} onChange={(e) => setDatos({ ...datos, password: e.target.value })} type="password" />
                <button onClick={doLogin}>login</button>
            </>
        )
    }


}