import {
  Modal,
  Button,
  Grid,
  Stack,
  Typography,
  Skeleton,
} from "@mui/material";
import TurmaCard from "../../components/TurmaCard";
import CreateGroupButton from "../../components/CreateGroupButton";
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup";
import { useOpenModalNotification } from "../../provider/OpenModalNotification";
import ModalCreateGroup from "../../components/ModalCreateGroup";
import ModalNotification from "../../components/ModalNotification";
import { ContainerBox, StyledCard, ProfileImg, StyledGrid } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useHistory } from "react-router-dom";
import { useCoachGroups } from "../../provider/CoachGroups";
import ModalCheckout from "../../components/ModalCheckout";
import TurmaCardCoach from "../../components/TurmaCardCoach";


export default function Home() {
  const { modalCreateGroup, toggleModalCreateGroup } =
    useOpenModalCreateGroup();

  const { modalNotification, toggleModalNotification } =
    useOpenModalNotification();

  const { getCoachGroups, coachGroups, verifyNotify } = useCoachGroups();

  const [user, setUser] = useState(false);

  const [groups, setGroups] = useState(false);

  const { name, surname } = user;

  const { id } = useParams();

  const history = useHistory();

  const axiosGetUser = () => {
    api
      .get(`/users/${localStorage.getItem("userId")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const redirect = () => {
    history.push(`/home/${localStorage.getItem("userId")} `);
    axiosGetUser();
  };

  useEffect(() => {
    id === localStorage.getItem("userId") ? axiosGetUser() : redirect();
  }, []);

  useEffect(() => {
    api
      .get(`/users/${localStorage.getItem("userId")}?_embed=groups`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setGroups(res.data.groups.filter((a) => a.status_ativo === 1));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [modalCreateGroup]);

  useEffect(() => {
    getCoachGroups(localStorage.getItem("accessToken"), id);
  }, [verifyNotify]);

  return (
    <ContainerBox>
      <StyledCard elevation={2}>
        <Typography
          variant="h5"
          sx={{ alignSelf: "flex-start", color: "text.primary" }}
        >
          Perfil
        </Typography>

        <ProfileImg component="img" image={`https://robohash.org/${id}`} />

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ height: "100%" }}
        >
          {user ? (
            <Typography variant="h5" sx={{ color: "text.primary" }}>
              {name} {surname}
            </Typography>
          ) : (
            <Skeleton variant="rectangular" height={21.34} width={110} />
          )}

          <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
            Instituição
          </Typography>

          <Button variant="contained">Perfil</Button>
        </Stack>
      </StyledCard>

      <StyledGrid container spacing={5}>
        {groups &&
          groups.map((each, index) => (
            <Grid item key={index}>
              <TurmaCard group={each} type={"Facilitador"} />
            </Grid>
          ))}

        {coachGroups &&
          coachGroups.map((each, index) => (
            <Grid item key={index}>
              <TurmaCardCoach group={each} type={"Coach"} />
            </Grid>
          ))}

        <Grid item>
          <CreateGroupButton />
        </Grid>
      </StyledGrid>

      <Modal
        open={modalCreateGroup}
        onClose={toggleModalCreateGroup}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ModalCreateGroup />
      </Modal>

      <ModalCheckout useId={id} name={name} />

      <Modal
        open={modalNotification}
        onClose={toggleModalNotification}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ModalNotification></ModalNotification>
      </Modal>
    </ContainerBox>
  );
}
