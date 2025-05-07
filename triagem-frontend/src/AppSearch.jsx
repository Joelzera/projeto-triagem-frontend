import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import imagemLogo from '../img/logo1.png'
import { useState } from 'react';
import axios from 'axios'
import { useSetor } from "./SetorContext";

const AppSearch = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState({ msg:''})
    const {setor, setSetor} = useSetor()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5000/analisar`, search)
            if(response.data.setor === ''){
                return null
            }else if(response.data.setor === 'setor nao indentificado'){
                return null
            }
            else {
                setSetor(response.data.setor)
                navigate('/direcionar')
            }
            
        } catch (error) {
            console.log(error, 'nao identificamos o setor')
        }
    }

    console.log(setor)

    return (
        <>
            <Box sx={{ backgroundImage: 'linear-gradient(135deg, #cc092f 0%, #cc092f 40%, #bb1570 100%)', width: '100vw', height: '70px', top: 0, zIndex: 100, position: 'fixed' }}>
                <Avatar src={imagemLogo} variant='square' sx={{ width: '200px', height: '70px', marginLeft: 2 }} ></Avatar>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw' }}>
                <Typography variant='h4'>Olá! como podemos ajudar?</Typography>
                <Typography variant='h6'>Digite como podemos te ajudar a retirar a senha</Typography>
                <Box mt={2}>
                    <form onSubmit={handleSubmit}>
                    <TextField id='msg' size='small' sx={{ width: '300px', mt: 1 }} onChange={(e) => setSearch({...search, msg: e.target.value})}/>
                    <Button type='submit' variant='contained' sx={{ backgroundImage: 'linear-gradient(135deg, #cc092f 0%, #cc092f 40%, #bb1570 100%)', margin: 1 }} > Pesquisar </Button>
                    </form>
                </Box>
            </Box>
  
        </>
    )
}

export default AppSearch