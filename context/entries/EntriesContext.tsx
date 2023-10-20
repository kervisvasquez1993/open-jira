import { createContext } from "react"
import { Entry } from "../../interfaces/entries"

interface ContextProps {
    entries: Entry[] // falta el tipo de dato del arreglo
}

export const EntriesContext = createContext({} as ContextProps)