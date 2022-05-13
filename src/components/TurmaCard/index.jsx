import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorCard, InfosCard, StyledCard } from "./styles";


export default function TurmaCard() {

  return(
    <StyledCard >

      <ColorCard>

        <IconButton sx={{position: "absolute", top: "0", right: "0"}} >
          <MoreVertIcon sx={{color: "#000"}} />
        </IconButton>

      </ColorCard>

      <Stack justifyContent="space-around" alignItems="center" height="150px" padding="15px 0px" mt="-9.5px" >

        <Typography variant="h5" color="#000" >Turma 1</Typography>

        <Typography variant="caption" color="#000" mt="-15px" >cargo</Typography>

          {/* <Button variant="contained" >entrar</Button> */}

        <Button variant="contained" >checkin</Button>

      </Stack>

    </StyledCard>
  )

}