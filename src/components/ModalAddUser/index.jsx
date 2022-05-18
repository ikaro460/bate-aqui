import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardMedia,
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
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

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

export default function ModalAddUser() {
  const { toggleModalAddUser } = useOpenModalAddUser();
  const { users, getUsers } = useUsers();
  const token = localStorage.getItem("accessToken");
  getUsers(token);

  //PEGANDO ID DO GRUPO
  const { id } = useParams();

  //DECLARANDO OPTION DO AUTOCOMPLETE
  const options = users.map((user, index) => {
    return {
      label: `${user.name} ${user.surname}`,
      id: index,
    };
  });

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);

    // api
    //   .post("/groups", formData, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     toggleModalAddUser();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <StyledBox onSubmit={handleSubmit(onSubmit)} component="form">
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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          inputProps={register("name")}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <Button type="submit" variant="contained">
          Adicionar
        </Button>
      </Stack>
    </StyledBox>
  );
}
