import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorCard, InfosCard, StyledCard } from "./styles";
import { useState } from "react";


export default function TurmaCard() {

  const [ openMore, setOpenMore ] = useState(false)
  const [anchorEl, setAnchorEl]   = useState(null);

  const toggleMore = (event) => {
    setOpenMore(!openMore)
    setAnchorEl(event.currentTarget)
  }

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

        <Typography variant="h5" color="text.primary" >Turma 1</Typography>

        <Typography variant="caption" color="text.primary" mt="-15px" >cargo</Typography>

          {/* <Button variant="contained" >entrar</Button> */}

        <Button variant="contained" >checkin</Button>

      </Stack>

    </StyledCard>
  )

}