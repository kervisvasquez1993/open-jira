import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import EntryCard from './EntryCard'
import { EntryStatus, Entry } from '../../interfaces/entries';
import { EntriesContext } from '../../context/entries'
interface Props {
    status: EntryStatus
}
const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext)
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])
    const onDropEntry = (event: DragEvent) => {
        // console.log(event)
        const id = event.dataTransfer.getData("text")
        console.log({ id })
    }
    const allowDrop = (event: DragEvent) => {
        event.preventDefault()

    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '5px 10px' }}>
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => <EntryCard key={entry._id} entry={entry} />)
                    }
                </List>
            </Paper>
        </div>
    )
}
export default EntryList