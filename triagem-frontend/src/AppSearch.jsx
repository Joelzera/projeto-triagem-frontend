import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const AppSearch = () => {

    const navigate = useNavigate()

    return(
       <>
       <Typography>Olá, como podemos ajudar?</Typography> 
       <Button onClick={() => navigate('/') }>Navegar</Button>
       </>
    )
}

export default AppSearch