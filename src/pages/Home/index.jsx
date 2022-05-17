import { Modal, Box, Button, Card, CardMedia, Grid, Stack, TextField, Typography, Skeleton } from "@mui/material"
import TurmaCard from "../../components/TurmaCard";
import ProfilePhoto from "../../imgs/foto.png"
import CreateGroupButton from "../../components/CreateGroupButton";
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup";
import { useOpenModalNotification } from '../../provider/OpenModalNotification';
import ModalCreateGroup from "../../components/ModalCreateGroup";
import ModalNotification from "../../components/ModalNotification";
import { ContainerBox, StyledCard, ProfileImg, StyledGrid } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";


export default function Home() {

  const { modalCreateGroup, toggleModalCreateGroup} = useOpenModalCreateGroup()

  const {modalNotification, toggleModalNotification} = useOpenModalNotification()

  const [notification, setNotification] = useState([])
  
  const [ user, setUser ] = useState(false)

  const [ groups, setGroups ] = useState(false)

  const { email, name, surname } = user

  const { id } = useParams()

  useEffect( () => {

    api.get(`/users/${id}`, {headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
      .then( (res) => {
        setUser(res.data)
      })
      .catch( (err) =>{
        console.log(err)
      })

  },[])

  useEffect( () => {
    
    api.get(`/users/${id}?_embed=groups`, {headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
    .then( (res) => {
      setGroups(res.data.groups)
    })
    .catch( (err) =>{
      console.log(err)
    })
    
  },[modalCreateGroup])

  useEffect(() => {
    api.get(`/users/${id}?_embed=coach`, {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
    .then((res) => setNotification(res.data.coach))
  }, [])

  const checkNotification = () => {
    const notify = notification.filter((coach) => coach.status_aceito === 0)

    return notify
  }
 
  return(
    <ContainerBox>

      <StyledCard elevation={2} >

        <Typography variant="h5" sx={{alignSelf: "flex-start", color: "text.primary"}} >
          Perfil
        </Typography>

        <ProfileImg
          component="img"
          image={ProfilePhoto}
        />

        <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{height: "100%"}} >

          {user ? (
            <Typography variant="h5" sx={{color: "text.primary"}} >
              {name} {surname}
            </Typography>
          ):(
            <Skeleton variant="rectangular" height={21.34} width={110} />
          )}


          <Typography variant="subtitle2" sx={{color: "text.primary"}} >
            Instituição
          </Typography>

          <Button variant="contained" >
            Perfil
          </Button>

        </Stack>

      </StyledCard>

      <StyledGrid container spacing={5} >

        {groups &&
          groups.map( (each, index) => 
            <Grid item key={index} >
              <TurmaCard group={each} />
            </Grid>
          )
        }

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

      <Modal
        open={modalNotification}
        onClose={toggleModalNotification}
        sx={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}
      >
        <ModalNotification checkNotification={checkNotification}></ModalNotification>

      </Modal>

    </ContainerBox>
  )

}