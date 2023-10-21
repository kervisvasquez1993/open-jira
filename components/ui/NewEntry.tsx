import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box, Button, TextField } from '@mui/material'

export const NewEntry = () => {
    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>
            <Button startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth variant='outlined'></Button>
            <TextField fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label="Nueva Entrada"
                helperText="Ingrese un Valor"
            />
            <Box display='flex' justifyContent={'space-around'}>
                <Button variant='text'  >Cancelar</Button>
                <Button variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />}>Save</Button>
            </Box>
        </Box>
    )
}

