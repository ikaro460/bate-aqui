import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useOpenModalDeleteUser } from "../../provider/OpenModalDeleteUser";
import { useState } from "react";
import { api } from "../../services/api";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { ToastSuccess } from "../Toasts/Index";
import { useGroupUsers } from "../../provider/GroupUsers";

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

export function ModalDeleteUser() {
  const { groupUsers } = useGroupUsers();
  const { toggleModalDeleteUser } = useOpenModalDeleteUser();
  const [searchValue, setSearchValue] = useState("");
  const [usersToDelete, setUsersToDelete] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(groupUsers);
  console.log(groupUsers);

  const onSubmit = () => {
    usersToDelete.map((element) => {
      api
        .patch(`/coach/${element.id}`, { status_ativo: 0 })
        .then((res) => {
          toggleModalDeleteUser();
          ToastSuccess("Usuario removido com sucesso");
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <StyledBox component="form">
      <IconButton
        onClick={toggleModalDeleteUser}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <CloseIcon sx={{ color: "text.primary" }} />
      </IconButton>

      <Typography variant="h4" mb="35px" color="text.primary">
        Deletar Aluno
      </Typography>

      <Stack spacing={2} alignItems="center">
        <TextField
          onChange={(a) => {
            setSearchValue(a.target.value);
            setFilteredUsers(
              groupUsers.filter((user) =>
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
          {filteredUsers.map((user) => {
            if (
              groupUsers.filter((user) =>
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
                <CoachCard key={user.userId}>
                  {usersToDelete.find((a) => a.id === user.id) ? (
                    <CheckOutlinedIcon
                      onClick={() =>
                        setUsersToDelete(
                          usersToDelete.filter((a) => a.id != user.id)
                        )
                      }
                      cursor="pointer"
                    />
                  ) : (
                    <PersonAddAltOutlinedIcon
                      cursor="pointer"
                      onClick={() => setUsersToDelete([...usersToDelete, user])}
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
          Remover
        </Button>
      </Stack>
    </StyledBox>
  );
}
