import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorCard, InfosCard, StyledCard } from "./styles";
import { useState } from "react";
import moment from "moment"


export default function TurmaCard() {

  const tempoRestantepCheckin = moment(checkin, "h:mm").fromNow()
  const tempoRestantepCheckout = moment(checkout, "h:mm").fromNow()

  console.log(tempoRestantepCheckin, name)
  
  console.log(tempoRestantepCheckout, name)

  const regexDePobre = ["1 minutes ago", "2 minutes ago", "3 minutes ago", "4 minutes ago", "5 minutes ago", "6 minutes ago", "7 minutes ago", "8 minutes ago", "9 minutes ago", "10 minutes ago", "11 minutes ago", "12 minutes ago", "13 minutes ago", "14 minutes ago", "15 minutes ago",]

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

        
        <Stack direction="row" spacing={3} alignItems="center" >
        
          {regexDePobre.find( (each) => {return each === tempoRestantepCheckin}) ? (
            <Button color="success" variant="contained" >checkin</Button>
          ):(
            <Button color="error" variant="contained" >checkin</Button>
          )}

          {regexDePobre.find( (each) => {return each === tempoRestantepCheckout}) ? (
            <Button color="success" variant="contained" >checkout</Button>
          ):(
            <Button color="error" variant="contained" >checkout</Button>
          )}

        </Stack>


      </Stack>

    </StyledCard>
  )

}