// this is a boilerplate for context

import React, { createContext, useState } from 'react';

export const Usercontext = createContext();

export const UsercontextProvider = ({children}) =>{
    const [user,setUser] = useState({
        name:"John Wick",
        age:38,
        sex:"male"
    })
    return(
        <Usercontext.Provider value={{user, setUser}}>
            {children}
        </Usercontext.Provider>
    )
}