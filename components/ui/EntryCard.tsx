import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

const EntryCard = () => {
    return (
        <Card sx={{ marginBottom: 1 }}>

            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        Esto es la descripction
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