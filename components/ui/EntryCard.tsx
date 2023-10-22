import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { DragEvent, FC, useContext } from 'react'
import { Entry, EntryStatus } from '../../interfaces/entries';
import { UIContext } from '../../context/ui';

interface Props {
    entry : Entry
}

const EntryCard:FC<Props> = ({entry}) => {
    const {startDragging, endDragging} = useContext(UIContext)

    const onDragStart = (event:DragEvent) => {
            //TODO: modificar el estado para saber cual estoy haciendo drag
            event.dataTransfer.setData('text', entry._id)
            startDragging()
    }

    const onDragEnd = (event:DragEvent) => {
        endDragging()
    }
    return (
        <Card sx={{ marginBottom: 1 }}
        
            draggable={true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >

            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default EntryCard