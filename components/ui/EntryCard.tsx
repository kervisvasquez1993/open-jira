import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react'
import { Entry, EntryStatus } from '../../interfaces/entries';

interface Props {
    entry : Entry
}

const EntryCard:FC<Props> = ({entry}) => {

    return (
        <Card sx={{ marginBottom: 1 }}>

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