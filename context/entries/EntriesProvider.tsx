import { FC, ReactNode, useReducer } from 'react';
import { EntriesContext, entriesReducer } from '.';
interface UIProviderProps {
    children: ReactNode;
}
export interface EntriesState {
    entries: []
}
const Entrices_INITIAL_STATE: EntriesState = {
    entries: []
}
export const EntriesProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entrices_INITIAL_STATE)
    return (
        <EntriesContext.Provider value={{
            ...state
        }}>{children}</EntriesContext.Provider>
    )
}