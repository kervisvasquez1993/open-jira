import { EntriesState } from ".";

type EntriesActionType = { entries: [] }
export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.entries) {
        // case "":
        //     return {
        //         ...state,
        //     }

        default:
            return state
    }
}