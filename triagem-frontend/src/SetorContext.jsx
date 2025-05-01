import { createContext, useState, useContext } from "react";

const SetorContext = createContext() //criando o contexto

export const SetorProvider = ({children}) => {
    const [setor, setSetor] = useState({})

    return(
        <SetorContext.Provider value={{setor, setSetor}}>
            {children}
        </SetorContext.Provider>
    )
}

export const useSetor = () => useContext(SetorContext);