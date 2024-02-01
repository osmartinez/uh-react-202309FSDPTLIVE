import { useState, createContext, useEffect,  } from "react"
import { useCookies } from "react-cookie"

export const CookieAcceptContext = createContext()

export function CookieAcceptProvider({children}){
    const [decision, setDecision] = useState(0)
    const [cookies,setCookie] = useCookies(["consentimiento"])

    useEffect(()=>{
        const valorConsentimiento = cookies.consentimiento
        if(valorConsentimiento!==undefined){
            setDecision(valorConsentimiento)
        }
    },[])

    function aceptar(){
        setDecision(1)
        setCookie("consentimiento",1)
    }

    function rechazar(){
        setDecision(2)
        setCookie("consentimiento",2)

    }

    return(
        <CookieAcceptContext.Provider value={{decision,aceptar,rechazar}}>
            {children}
        </CookieAcceptContext.Provider>
    )

}