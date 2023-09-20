import { FC, useReducer, ReactNode } from "react";
import { UIContext, uiReducer } from ".";

interface UIProviderProps {
    children: ReactNode;
}

export interface UIState {
    sidemenuOpen: boolean;
}
const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: true,
};

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispath] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        console.log("llamndo open")
        dispath({ type: "UI - Open Sidebar" })
    }

    const closeSideMenu = () => {
        console.log("llamndo close")
        dispath({ type: "UI - Close Sidebar" })
    }
    return (<UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
        {children}
    </UIContext.Provider>)
} 