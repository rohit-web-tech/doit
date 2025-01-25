import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState("All Tasks");
    const [taskLayout, setTaskLayout] = useState("list");
    const [isFocused, setIsFocused] = useState(false);
    const [showSideBar, setShowSideBar] = useState(true);
    const [openDetails, setOpenDetails] = useState({ id: null, status: false });

    return (
        <GlobalContext.Provider value={{ currentPage, setCurrentPage, taskLayout, setTaskLayout, isFocused, setIsFocused, showSideBar, setShowSideBar, openDetails, setOpenDetails}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext);