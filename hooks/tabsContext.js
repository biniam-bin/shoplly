import React, { useContext, createContext, useState } from "react"

const TabContext = createContext({
    // activeTab: "biniam"
})


function Tabprovider({ children }) {
    const [activeTab, setActiveTab] = useState('Electronics')
    return (
        <TabContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </TabContext.Provider>
    )
}


export { Tabprovider, TabContext };