import { Avatar, Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import imagemLogo from '../img/logo1.png'


const AppIssue = () => {

    const navigate = useNavigate()


    return (
        <>
            <Box sx={{
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh'
            }}>
                <Avatar src={imagemLogo} variant="square" sx={{ width: 400, height: 100, mb: 5 }} ></Avatar>
                <Typography variant='h4' color='#fff'>Ok, estamos emitindo sua senha...</Typography>
                <Button onClick={() => navigate('/direcionar')}>voltar</Button>
            </Box>
        </>
    )
}

export default AppIssue