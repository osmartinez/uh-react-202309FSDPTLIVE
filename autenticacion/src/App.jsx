import { Link, Navigate, Route, Routes } from "react-router-dom"

import './App.css'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Private from "./pages/private/Private"
import Public from "./pages/public/Public"
import { useContext } from "react"
import { SessionContext } from "./contexts/SessionContext"
import NotFound from "./pages/notfound/NotFound"
import Admin from "./pages/admin/Admin"
import { CookieAcceptContext } from "./contexts/CookieAcceptContext"
import Signup from "./pages/signup/Signup"

function App() {

  const { decision,aceptar,rechazar } = useContext(CookieAcceptContext)

  const { user, logout } = useContext(SessionContext)

  if(decision === 2){
    return (
      <div>
        <h2>Necesitas aceptar las cookies para que la pagina funcione</h2>
        <button onClick={aceptar}>aceptar</button>
      </div>
    )
  }
  else{
    return (
    <>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {user ? '' : <li>
            <Link to='/login'>Login</Link>
          </li>}

          {user ? '' : <li>
            <Link to='/registro'>Registro</Link>
          </li>}

          {user ? <li>
            <Link to='/area-privada'>Area privada</Link>
          </li> : ''}

          <li>
            <Link to='/area-publica'>Area pública</Link>
          </li>

          {user && user.rol === "admin" ? <li>
            <Link to='/area-admin'>Area admin</Link>
          </li> : ''}

          {
            user ? <li>
              <button onClick={logout}>logout</button>
            </li> : ''
          }

        </ul>
      </header>

      <main>
        <Routes>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/registro" element={<Signup></Signup>}></Route>
          <Route path="/area-privada" element={user ? <Private></Private> : <Navigate to="/login"></Navigate>}></Route>
          <Route path="/area-publica" element={<Public></Public>}></Route>
          <Route path="/area-admin" element={user && user.rol === "admin" ? <Admin></Admin> : <NotFound></NotFound>}></Route>
        </Routes>
      </main>



      <footer>
        {
          decision === 0 ?
            <div className="cookie-ask">
              <p>
                Deseas aceptar las cookies
              </p>
              <button onClick={aceptar}>aceptar</button>
              <button onClick={rechazar}>rechazar</button>
            </div> : ""
        }

        Copyright 2023-2024 - Mi página
      </footer>
    </>
  )
  }

  
}

export default App
