export interface Entry {
    _id: string
    description: string
    createAt: number
    status: EntryStatus
}

export type EntryStatus = "Pending" | "in-progress" | "finished"