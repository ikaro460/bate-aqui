import { Box, Button, Card, CardMedia, Typography, Stack } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import { maxHeight } from "@mui/system";
import TurmaCard from "../../components/TurmaCard";
import asset from "../../imgs/Asset 1.png"

const useStyles = makeStyles( (themes) => ({

  img: {
    maxWidth: "800px",

    objectFit: "contain",
  }

}))

const ContainerBox = styled(Box)(({theme}) => ({
  height: "100vh - 56px",
  // paddingTop: "150px",
  padding: "150px 15px 0px 15px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",

}))

export default function LandingPage() {

  const classes = useStyles()

  return(
    <ContainerBox>

      <CardMedia 
        className={classes.img}
        component="img"
        image={asset}
      />

      <Stack spacing={{xs: 2, sm: 2, md: 5}} alignItems="center" >

        <Typography variant="titulo" >Diga "Presente" de um jeito novo</Typography>

        <Typography variant="h5" >Seja bem vindo a lista de presença escolar do futuro</Typography>

        <Button variant="contained" >cadastre-se</Button>

      </Stack>

    </ContainerBox>
  )

}