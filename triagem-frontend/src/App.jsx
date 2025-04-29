import { Avatar, Box, Typography } from '@mui/material';
import imagem from '../img/logo.png'

const App = () => {

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
        <Avatar src={imagem} sx={{ width: 100, height: 100, mb: 2}}></Avatar>
        <Typography variant='h2' color='#fff'>Seja Bem vindo!</Typography>
        <Typography variant='h4' color='#fff'>Toque na tela para continuar</Typography>
      </Box>
    </>
  )
}

export default App
