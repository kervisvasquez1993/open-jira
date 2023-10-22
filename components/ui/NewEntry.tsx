import { ChangeEvent, useContext, useState } from 'react';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box, Button, TextField } from '@mui/material'
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
    const {addNewEntry} = useContext(EntriesContext)
    const {setIsAddingEntry, isAddingEntry} = useContext(UIContext)
    // const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false);
    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onSave = () => {
        if(inputValue.length === 0) return

        console.log(inputValue)
        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(touched)
        setInputValue("")
    }

    
    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>

            {isAddingEntry ? (<><TextField fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label="Nueva Entrada"
                helperText={inputValue.length <= 0 && touched && "Ingrese un Valor"}
                error={inputValue.length <= 0 && touched}
                value={inputValue}
                onChange={onTextChange}
                onBlur={() => setTouched(true)}
            />
                <Box display='flex' justifyContent={'space-around'}>
                    <Button onClick={() => setIsAddingEntry(false)} variant='text'  >Cancelar</Button>
                    <Button variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />} onClick={onSave}>Save</Button>
                </Box></>) : (<Button onClick={() => setIsAddingEntry(true)} startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth variant='outlined'>Agregar una nueva tarea</Button>)}
        </Box>
    )
}

