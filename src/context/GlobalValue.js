import React,{createContext} from "react";

export const GlobalContext=createContext()
const GlobalValueProvider=props=>{
    const student={
        first_name:'Shanta',
        last_name:'chaudhary',
        address:'Balaju',
        subject:'React',
        age:27,
    }
    return(

        <GlobalContext.Provider value={student}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalValueProvider