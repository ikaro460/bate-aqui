import { Box, Button, Card, CardContent, IconButton, Stack, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorCard, InfosCard, StyledCard } from "./style";


export default function TurmaCard() {

  return(
    <StyledCard>

      <ColorCard>

        <IconButton sx={{position: "absolute", top: "0", right: "0"}} >
          <MoreVertIcon />
        </IconButton>

      </ColorCard>

      <InfosCard>

        <Typography>Turma 1</Typography>

        <Typography variant="caption" >cargo</Typography>

        <Stack direction="row" justifyContent="space-around" >

          <Button variant="contained" >entrar</Button>

          <Button variant="contained" >checkin</Button>

        </Stack>

      </InfosCard>

    </StyledCard>
  )

}