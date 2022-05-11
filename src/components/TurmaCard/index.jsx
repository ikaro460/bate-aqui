import { Box, Button, Card, CardContent, IconButton, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import MoreVertIcon from '@mui/icons-material/MoreVert';


const StyledCard = styled(Card)(({theme}) => ({
  width: "100%",
  maxWidth: "240px",
  minHeight: "220px",
  padding: "0px",
}))

const ColorCard = styled(CardContent)(({theme}) => ({
  minHeight: "110px",

  position: "relative",
  backgroundColor: "#CDE2ED",
}))

const InfosCard = styled(CardContent)(({theme}) => ({
  height: "100%",
  padding: "10px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}))


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