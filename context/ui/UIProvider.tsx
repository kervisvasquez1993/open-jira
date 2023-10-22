import { FC, useReducer, ReactNode } from "react";
import { UIContext, uiReducer } from ".";

interface UIProviderProps {
    children: ReactNode;
}

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean
    isDragging: boolean
}
const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: true,
    isAddingEntry: false,
    isDragging: false
};



export const UIProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispath] = useReducer(uiReducer, UI_INITIAL_STATE)
    const setIsAddingEntry = (isAdding: boolean) => {
        dispath({ type: "UI - setIsAddingEntry", payload: isAdding })
    }
    const openSideMenu = () => {
        console.log("llamndo open")
        dispath({ type: "UI - Open Sidebar" })
    }

    const closeSideMenu = () => {
        console.log("llamndo close")
        dispath({ type: "UI - Close Sidebar" })
    }

    const startDragging = () => {
        dispath({type : "UI - Start Dragging"})
    }

    const endDragging = () => {
        dispath({type : "UI - End Dragging"})
    }
    return (<UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry, endDragging, startDragging }}>
        {children}
    </UIContext.Provider>)
} 