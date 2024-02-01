import { createContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

export const SessionContext = createContext()

export function SessionProvider({children}){

    const [user,setUser] = useState(null)

    const [cookies, setCookie,removeCookie] = useCookies(['user']);

    useEffect(()=>{
        //const posibleUsuario = localStorage.getItem("user")
        const posibleUsuario = cookies.user
        if(posibleUsuario !== null){
            setUser(posibleUsuario)
        }
    }, [])

    function login(user){
        setUser(user)
        //localStorage.setItem("user", JSON.stringify(user))
        setCookie("user",user)
    }

    function logout(){
        setUser(null)
        //localStorage.removeItem("user")
        removeCookie("user")
    }

    return(
        <SessionContext.Provider value={{user,login,logout}}>
            {children}
        </SessionContext.Provider>
    )
}