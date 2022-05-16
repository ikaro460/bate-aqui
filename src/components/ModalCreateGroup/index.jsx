import { Box, Button, Card, CardMedia, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup"
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const StyledBox = styled(Box)(({theme}) => ({
  minWidth: "300px", 
  maxWidth: "360px", 
  width: "100%", 
  padding: "35px 0px",
  position: "relative",

  backgroundColor: "#fff", 

  [theme.breakpoints.down('sm')]: {
    width: "260px"
  }
}))

export default function ModalCreateGroup() {

  const { toggleModalCreateGroup } = useOpenModalCreateGroup()

  const [value1, setValue1] = useState(null)

  const [value2, setValue2] = useState(null)

  console.log(value1)

  // console.log(value2)

  return(
    <StyledBox component="form" >

      <IconButton onClick={toggleModalCreateGroup} sx={{position: "absolute", top: 0, right: 0}} >
        <CloseIcon sx={{color: "#000"}} />
      </IconButton>

      <Typography variant="h4" mb="35px" >Nova turma</Typography>

      <Stack spacing={2} alignItems="center" >

        <TextField label="Nome do grupo" />

        <MobileTimePicker 
          label="Check-in"
          value={value1}
          onChange={(newValue) => {
            setValue1(new Date(newValue))
          }}
          renderInput={(params) => ( <TextField {...params} /> )}
        />

        <MobileTimePicker 
          label="Check-out"
          value={value2}
          onChange={(newValue) => {
            setValue2(newValue)
          }}
          renderInput={(startProps) => (
            <>
              <TextField color="primary" {...startProps} />
            </>
          )}
        />

        <Button type="submit" variant="contained" >Criar</Button>

      </Stack>

    </StyledBox>
  )

}

