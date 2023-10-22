import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import EntryCard from './EntryCard'
import { EntryStatus, Entry } from '../../interfaces/entries';
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui';
import style from "./EntryList.module.css"
interface Props {
    status: EntryStatus
}
const EntryList: FC<Props> = ({ status }) => {

    const { entries, entryUpdated } = useContext(EntriesContext)
    const { isDragging, endDragging } = useContext(UIContext)
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])
    const onDropEntry = (event: DragEvent) => {
        // console.log(event)
        const id = event.dataTransfer.getData("text")
        console.log({ id })
        const entry = entries.find(entry => entry._id === id)!
        entry.status = status
        entryUpdated(entry)
        endDragging()
    }
    const allowDrop = (event: DragEvent) => {
        event.preventDefault()

    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? style.dragging : ""}
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '5px 10px' }}>
                <List sx={{ opacity: isDragging ? 0.4 : 1, transition: "all .3s" }}>
                    {
                        entriesByStatus.map(entry => <EntryCard key={entry._id} entry={entry} />)
                    }
                </List>
            </Paper>
        </div>
    )
}
export default EntryList