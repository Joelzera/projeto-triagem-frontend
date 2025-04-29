import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const AppIssue = () => {

    const navigate = useNavigate()

    return(
       <>
       <Typography>Emitindo...</Typography> 
       <Button onClick={() => navigate('/')}>voltar</Button>
       </>
    )
}

export default AppIssue