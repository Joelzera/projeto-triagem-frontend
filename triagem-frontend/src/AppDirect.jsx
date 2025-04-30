import { Avatar, Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import imagemLogo from '../img/logo1.png'

const AppDirect = () => {

    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ backgroundColor: 'red', width: '100vw', height: '70px', top: 0, zIndex: 100, position: 'fixed' }}>
                <Avatar src={imagemLogo} variant='square' sx={{ width: '200px', height: '70px', marginLeft: 2 }} ></Avatar>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw' }}>
                <Typography variant='h4'>Isso é feito no Setor de Contas e Cartoes</Typography>
                <Typography variant='h4'>Posso emitir a senha?</Typography>
                <Box>
                    <Button variant='contained' sx={{ backgroundColor: 'red', margin: 2 }} onClick={() => navigate('/pesquisar')} >Voltar</Button>
                    <Button variant='contained' sx={{ backgroundColor: 'red', margin: 2 }} onClick={() => navigate('/emitir')} >Confirmar</Button>
                </Box>
            </Box>
        </>
    )
}

export default AppDirect