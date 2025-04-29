import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const AppDirect = () => {

    const navigate = useNavigate()

    return(
       <>
       <Typography>Isso é feito no Setor</Typography> 
       <Button onClick={() => navigate('/') }>voltar</Button>
       </>
    )
}

export default AppDirect