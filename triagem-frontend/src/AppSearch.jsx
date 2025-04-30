import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import imagemLogo from '../img/logo1.png'
import MicIcon from '@mui/icons-material/Mic';

const AppSearch = () => {

    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ backgroundColor: 'red', width: '100vw', height: '70px', top: 0, zIndex: 100, position: 'fixed' }}>
                <Avatar src={imagemLogo} variant='square' sx={{ width: '200px', height: '70px', marginLeft: 2 }} ></Avatar>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw' }}>
                <Typography variant='h4'>Olá! como podemos ajudar?</Typography>
                <Typography variant='h6'>Digite como podemos te ajudar a retirar a senha</Typography>
                <Box mt={2}>
                    <TextField size='small' sx={{ width: '250px', mt: 1 }} />
                    <IconButton
                        sx={{
                            backgroundColor: 'red',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'darkred', // cor mais forte ao passar o mouse
                            }, margin: 1
                        }}>
                        <MicIcon />
                    </IconButton>
                    <Button variant='contained' sx={{ backgroundColor: 'red', margin: 1 }} onClick={() => navigate('/direcionar')}> Pesquisar </Button>
                </Box>
            </Box>
            <Button onClick={() => navigate('/')}>voltar</Button>
            <Button onClick={() => navigate('/direcionar')}>proximo</Button>
        </>
    )
}

export default AppSearch