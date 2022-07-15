import { createContext, useState } from "react";
import Sidebar from "../components/Sidebar";


const SideBarContext = createContext({
    openSideBar: () => { },
    closeSideBar: () => { }
});

export function SideBarContextProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const openSideBar = () => setIsOpen(true);
    const closeSideBar = () => setIsOpen(false);

    const context = {
        openSideBar: openSideBar,
        closeSideBar: closeSideBar
    };

    return (
        <SideBarContext.Provider value={context}>
            {children}
            <Sidebar isOpen={isOpen} />
        </SideBarContext.Provider>
    )
}

export default SideBarContext;