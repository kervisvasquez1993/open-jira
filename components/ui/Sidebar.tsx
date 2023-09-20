import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import { UIContext } from '../../context/ui';
const menuItem: string[] = ["index", "starrad", "sendMenu"]
export const Sidebar = () => {

     const {sidemenuOpen,  closeSideMenu} = useContext(UIContext)
     console.log(sidemenuOpen,"sidemenuOpen")
    return (
        <Drawer anchor='left' open={sidemenuOpen} onClose={closeSideMenu}>
            <Box sx={{ padding: "5px 10px" }}>
                <Typography variant='h4'>Menu</Typography>
            </Box>
            <Box sx={{ width: "250px" }} >
                <List>{
                    menuItem.map((text, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <AttachEmailOutlinedIcon />}

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }</List>
                <Divider />
                <List>{
                    menuItem.map((text, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <AttachEmailOutlinedIcon />}

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }</List>
            </Box>
        </Drawer>
    )
}
