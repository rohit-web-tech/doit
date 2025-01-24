import React,{ createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    
    const [currentPage,setCurrentPage] = useState("All Tasks");
    const [taskLayout,setTaskLayout] = useState("list");

    return (
        <GlobalContext.Provider value={{currentPage,setCurrentPage,taskLayout,setTaskLayout}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext) ;