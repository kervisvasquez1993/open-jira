import { UIState } from ".";

type UIActionType = { type: "UI - Open Sidebar", payload: string } | { type: "UI - Close Sidebar", payload: string }
export const uiReducer = (state: UIState, action: any): UIState => {

    switch (action.type) {
        case "UI - Open Sidebar":
            return {
                ...state, sidemenuOpen: true
            }
        case "UI - Close Sidebar":
            return {
                ...state, sidemenuOpen: false
            }

        default:
            return state
    }
}