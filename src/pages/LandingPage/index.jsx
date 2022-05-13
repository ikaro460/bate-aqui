import { Box, Button, Card, CardMedia, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import { maxHeight } from "@mui/system";
import TurmaCard from "../../components/TurmaCard";

const useStyles = makeStyles( (themes) => ({



}))

const ContainerBox = styled(Box)(({theme}) => ({
  minHeight: "100vh - 56px",

  margin: "25px 12px",
}))

export default function LandingPage() {

  return(
    <ContainerBox>

      <Typography>Diga "PRESENTE" de um jeito novo</Typography>

      <Typography>Seja bem vindo a lista de presença escolar do futuro</Typography>

      <Button>cadastre-se</Button>

    </ContainerBox>
  )

}