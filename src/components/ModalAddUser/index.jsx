import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useOpenModalAddUser } from "../../provider/OpenModalAddUser";
import { useUsers } from "../../provider/Users";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { ToastSuccess } from "../Toasts/Index";

const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: "300px",
  maxWidth: "360px",
  width: "100%",
  padding: "35px 0px",
  position: "relative",

  backgroundColor: theme.palette.background.primary,

  [theme.breakpoints.down("sm")]: {
    width: "260px",
  },
}));

const StyledList = styled(Box)(({ theme }) => ({
  minWidth: "300px",
  maxWidth: "360px",
  width: "80%",
  height: "300px",
  overflow: "scroll",
  padding: "35px 0px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: theme.palette.tableRowContrast,
  borderRadius: "5px",
  boxShadow: "5px",

  [theme.breakpoints.down("sm")]: {
    width: "260px",
  },
}));

const CoachCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "80%",
  padding: "5px",
  margin: "3px",
}));

export default function ModalAddUser({ token }) {
  const { toggleModalAddUser } = useOpenModalAddUser();
  const { users } = useUsers();
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [usersToAdd, setUsersToAdd] = useState([]);
  const [groupCheckin, setGroupCheckin] = useState({});

  //PEGANDO ID DO GRUPO
  const { groupsId } = useParams();

  //CHAMANDO USERS DO GRUPO
  const getGroupUsers = () => {
    api
      .get(`/coach?groupsId=:${groupsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //GET INFOS DO GRUPO
  const getGroupData = () => {
    api
      .get(`/groups/${groupsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGroupCheckin({
          checkin: res.data.checkin,
          checkout: res.data.checkout,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroupUsers();
    getGroupData();
    console.log(usersToAdd);
  }, [usersToAdd]);

  const onSubmit = () => {
    console.log(usersToAdd);
    console.log(searchValue);

    usersToAdd.map((user) => {
      console.log(groupsId);
      const groupsIdNumber = Number(groupsId);
      const { id, name, surname } = user;
      const postData = {
        userId: id,
        name,
        surname,
        groupsId: groupsIdNumber,
        status_aceito: 0,
        status_ativo: 1,
        checkin: groupCheckin.checkin,
        checkout: groupCheckin.checkout,
      };

      console.log(postData);

      api
        .post(`/coach`, postData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          ToastSuccess("Usuário adicionados com suscesso");
          toggleModalAddUser();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <StyledBox component="form">
      <IconButton
        onClick={toggleModalAddUser}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <CloseIcon sx={{ color: "text.primary" }} />
      </IconButton>

      <Typography variant="h4" mb="35px" color="text.primary">
        Procurar *aluno*
      </Typography>

      <Stack spacing={2} alignItems="center">
        <TextField
          onChange={(a) => {
            setSearchValue(a.target.value);
            setFilteredUsers(
              users.filter((user) =>
                user.name
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()
                  .includes(
                    searchValue
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .toLowerCase()
                  )
              )
            );
          }}
        />
        <StyledList>
          {!!searchValue &&
            filteredUsers.map((user, index) => {
              if (
                users.filter((user) =>
                  user.name
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .includes(
                      searchValue
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                    )
                )
              ) {
                return (
                  <CoachCard key={index}>
                    {usersToAdd.find((a) => a.id === user.id) ? (
                      <CheckOutlinedIcon
                        onClick={() =>
                          setUsersToAdd(
                            usersToAdd.filter((a) => a.id != user.id)
                          )
                        }
                        cursor="pointer"
                      />
                    ) : (
                      <PersonAddAltOutlinedIcon
                        cursor="pointer"
                        onClick={() => setUsersToAdd([...usersToAdd, user])}
                      />
                    )}

                    <Typography marginX="10px">
                      {user.name} {user.surname}
                    </Typography>
                  </CoachCard>
                );
              }
            })}
        </StyledList>

        <Button onClick={() => onSubmit()} variant="contained">
          Adicionar
        </Button>
      </Stack>
    </StyledBox>
  );
}
