import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorCard, InfosCard, StyledCard } from "./styles";
import { useState } from "react";
import moment from "moment"
import { useOpenModalCheckout } from "../../provider/OpenModalCheckout";
import { useHistory } from "react-router-dom";


export default function TurmaCardCoach({group, type}) {

  const { toggleModalCheckout }   = useOpenModalCheckout()

  const [ openMore, setOpenMore ] = useState(false)

  const [ anchorEl, setAnchorEl ] = useState(null);

  const { name, checkin, checkout, userId, id } = group

  const history = useHistory();

  const toggleMore = (event) => {
    setOpenMore(!openMore)
    setAnchorEl(event.currentTarget)
  }

  const tempoRestantepCheckin = moment(checkin, "h:mm").fromNow();

  const tempoRestantepCheckout = moment(checkout, "h:mm").fromNow();

  // console.log(tempoRestantepCheckin, name);

  const regexDePobre = ["a few seconds ago", "a minute ago", "2 minutes ago", "3 minutes ago", "4 minutes ago", "5 minutes ago", "6 minutes ago", "7 minutes ago", "8 minutes ago", "9 minutes ago", "10 minutes ago", "11 minutes ago", "12 minutes ago", "13 minutes ago", "14 minutes ago", "15 minutes ago",]
  
  // console.log(tempoRestantepCheckout, name);

  const handleGroupClick = () => {
    return history.push(`/turma/${id}`);
  };

  return(
    <StyledCard >

      <ColorCard>

        <IconButton id="basic-button" onClick={toggleMore} aria-controls={openMore ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={openMore ? 'true' : undefined} sx={{position: "absolute", top: "0", right: "0"}} >
          <MoreVertIcon sx={{color: "background.primary"}} />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMore}
          onClose={toggleMore}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuItem>Editar</MenuItem>
          <MenuItem>Excluir</MenuItem>
        </Menu>

      </ColorCard>

      <Stack justifyContent="space-around" alignItems="center" height="150px" padding="15px 0px" mt="-9.5px" >

        <Typography variant="h5" color="text.primary" >{name}</Typography>

        <Typography variant="caption" color="text.primary" mt="-15px" >{type}</Typography>

        <Stack direction="row" spacing={3} alignItems="center" >

          {regexDePobre.find( (each) => {return each === tempoRestantepCheckin}) ? (
            <Button color="success" variant="contained" >checkin</Button>
          ):(
            <Button color="error" variant="contained" >checkin</Button>
          )}

          {regexDePobre.find( (each) => {return each === tempoRestantepCheckout}) ? (
            <Button color="success" variant="contained" onClick={ () => toggleModalCheckout(group)} >checkout</Button>
          ):(
            <Button color="error" variant="contained" >checkout</Button>
          )}

        </Stack>

      </Stack>

    </StyledCard>
  )

}