// this is a boilerplate for context

import React, { createContext, useState } from "react";

export const Namecontext = createContext();

export const NamecontextProvider = ({children})=>{
    const [name,setName] = useState("Rana")
    return(
        <Namecontext.Provider value={{name,setName}}>
            {children}
        </Namecontext.Provider> 
    )
}