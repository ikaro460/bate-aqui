import { Modal, Box, Button, Card, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import TurmaCard from "../../components/TurmaCard";
import ProfilePhoto from "../../imgs/foto.png"
import CreateGroupButton from "../../components/CreateGroupButton";
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup"
import ModalCreateGroup from "../../components/ModalCreateGroup";


const useStyles = makeStyles( (themes) => ({

  profile: {
    position: "absolute",
    top: "0px",
  }

}))

const ContainerBox = styled(Box)(({theme}) => ({
  minHeight: "100vh - 56px",

  margin: "25px 40px",
  
  [theme.breakpoints.down('sm')]: {
    margin: "25px 20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}))

const StyledCard = styled(Card)(({theme}) => ({
  maxWidth: "320px",
  height: "290px",
  maxHeight: "290px",
  padding: "10px 12px",
  marginBottom: "40px",

  display: "flex",
  flexDirection: "column",
  position: "relative",

  [theme.breakpoints.down('sm')]: {
    width: "260px"
  }
}))

const ProfileImg = styled(CardMedia)(({theme}) => ({
  // minHeight: "100px",
  width: "134px",
  height: "130px",
  margin: "0px auto",
  objectFit: "contain"
}))

const StyledGrid = styled(Grid)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}))

export default function Home() {

  const { modalCreateGroup, toggleModalCreateGroup} = useOpenModalCreateGroup()

  return(
    <ContainerBox>

      <StyledCard elevation={2} >

        <Typography variant="h5" sx={{alignSelf: "flex-start", color: "#000"}} >
          Perfil
        </Typography>

        <ProfileImg
          component="img"
          image={ProfilePhoto}
        />

        <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{height: "100%"}} >

          <Typography variant="h5" sx={{color: "#000"}} >
            Nome Sobrenome
          </Typography>

          <Typography variant="subtitle2" sx={{color: "#000"}} >
            Instituição
          </Typography>

          <Button variant="contained" >
            Perfil
          </Button>

        </Stack>

      </StyledCard>

      <StyledGrid container spacing={5} >

        <Grid item >
          <TurmaCard />
        </Grid>

        <Grid item >
          <CreateGroupButton />
        </Grid>

      </StyledGrid>

      <Modal
        open={modalCreateGroup}
        onClose={toggleModalCreateGroup}
        sx={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}
      >

        <ModalCreateGroup />

      </Modal>

    </ContainerBox>
  )

}