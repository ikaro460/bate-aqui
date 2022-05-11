import { Box, Button, Card, CardMedia, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import { maxHeight } from "@mui/system";
import TurmaCard from "../../components/TurmaCard";

const useStyles = makeStyles( (themes) => ({

  profile: {
    position: "absolute",
    top: "0px",
  }

}))

const ContainerBox = styled(Box)(({theme}) => ({
  minHeight: "100vh - 56px",

  margin: "25px 12px",
}))

const StyledCard = styled(Card)(({theme}) => ({
  padding: "10px 12px",

  display: "flex",
  flexDirection: "column",
  position: "relative",

  border: "1px solid black"
}))

const ProfileImg = styled(CardMedia)(({theme}) => ({
  minHeight: "100px",
  maxHeight: "130px",
}))

export default function Home() {

  const classes = useStyles()

  return(
    <ContainerBox>

      <StyledCard>

        <Typography sx={{alignSelf: "flex-start"}} >
          Perfil
        </Typography>

        <CardMedia
          component="img"
          image="/imgs/Avatar-Maker.svg"
        />

        <Typography>
          Nome Sobrenome
        </Typography>

        <Typography>
          Instituição
        </Typography>

        <Button>
          Perfil
        </Button>

      </StyledCard>

      {/* <TurmaCard /> */}

    </ContainerBox>
  )

}