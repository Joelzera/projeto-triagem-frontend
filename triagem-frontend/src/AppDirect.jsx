import { Avatar, Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import imagemLogo from '../img/logo1.png'
import { useSetor } from "./SetorContext"

const AppDirect = () => {

    const navigate = useNavigate()
    const { setor } = useSetor()

    return (
        <>
            <Box sx={{ backgroundImage: 'linear-gradient(135deg, #cc092f 0%, #cc092f 40%, #bb1570 100%)', width: '100vw', height: '70px', top: 0, zIndex: 100, position: 'fixed' }}>
                <Avatar src={imagemLogo} variant='square' sx={{ width: '200px', height: '70px', marginLeft: 2 }} ></Avatar>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw' }}>
                <Typography variant='h4'>Isso é feito no Setor de {setor}</Typography>
                <Typography variant='h4'>Deseja emitir uma senha?</Typography>
                <Box>
                    <Button variant='contained' sx={{ backgroundImage: 'linear-gradient(135deg, #cc092f 0%, #cc092f 40%, #bb1570 100%)', margin: 2 }} onClick={() => navigate('/pesquisar')} >Voltar</Button>
                    <Button variant='contained' sx={{ backgroundImage: 'linear-gradient(135deg, #cc092f 0%, #cc092f 40%, #bb1570 100%)', margin: 2 }} onClick={() => navigate('/emitir')} >Confirmar</Button>
                </Box>
            </Box>
        </>
    )
}

export default AppDirect