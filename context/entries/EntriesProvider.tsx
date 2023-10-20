import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '../../interfaces/entries';
import { stat } from 'fs';
interface UIProviderProps {
    children: ReactNode;
}
export interface EntriesState {
    entries: Entry[]
}
const Entrices_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Tarea pendiente",
            status: 'pending',
            createAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: "Tarea en progeso1",
            status: 'in-progress',
            createAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: "tarea finalizada",
            status: 'finished',
            createAt: Date.now() - 10000
        },
        {
            _id: uuidv4(),
            description: "tarea pendiente",
            status: 'pending',
            createAt: Date.now()
        },
    ]
}
export const EntriesProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entrices_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>{children}</EntriesContext.Provider>
    )
}