import { useContext } from "react"
import { SessionContext } from "../../contexts/SessionContext"

export default function Private() {

    const {user} = useContext(SessionContext)

    return (
        <>
            <h2>Área privada</h2>
            <p>Hola {user.email} tu token es {user.token}</p>
        </>
    )
}