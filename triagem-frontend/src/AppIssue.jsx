import { Avatar, Box, Button, Dialog, DialogTitle, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import imagemLogo from '../img/logo1.png'
import { useState } from "react"
import { useSetor } from "./SetorContext"


const AppIssue = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const { setor } = useSetor()
    
      const handleClose = () => {
        setOpen(false);
      };

      if(setor){
        setTimeout(() =>{
            setOpen(true)
        }, 4000)
      }
      if(open === true){
        setTimeout(() =>{
            setOpen(false)
            navigate('/')
        },4000)
      }

    return (
        <>
            <Box sx={{
                backgroundImage: 'linear-gradient(135deg, #cc092f 0%, #cc092f 40%, #bb1570 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh'
            }}>
                <Avatar src={imagemLogo} variant="square" sx={{ width: 400, height: 100, mb: 5 }} ></Avatar>
                <Typography variant='h4' color='#fff'>Ok, estamos emitindo sua senha...</Typography>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle variant="h5">{setor}</DialogTitle>
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'center'}}>Senha: 01</DialogTitle>
                </Dialog>
            </Box>
        </>
    )
}

export default AppIssue