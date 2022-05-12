import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { StyledLogin } from "./styles.jsx";
import LoginImagem from "../../imgs/Asset 1.png";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((themes) => ({
  img: {
    width: "200px",
  },
}));

export default function Login() {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // LÓGICA PARA REDIRECIONAR CASO JÁ ESTEJA LOGADO
  //
  //   useEffect(() => {
  //     if (authenticated) {
  //       return history.push("/home");
  //     }
  //   }, []);

  const onSubmitFunction = (formData) => {
    console.log("oi");
    console.log(formData);

    // LÓGICA DA REQUISIÇAO NA API
    // api
    //   .post("/", formData)
    //   .then((res) => {
    //     console.log(res);
    //     const { token } = res.data;
    //     const { id } = res.data.user;
    //     localStorage.clear();
    //     localStorage.setItem("authToken", token);
    //     localStorage.setItem("userId", id);
    //     toast.success("O login foi um sucesso");
    //   })
    //   .catch((err) => toast.error("Email ou senha inválidos"));
  };

  return (
    <Stack direction="column">
      <Container>
        <img className={classes.img} src={LoginImagem} alt="background-img" />
      </Container>
      <Container maxWidth="xs">
        <div>
          <LockOutlinedIcon />
        </div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Stack spacing={4}>
            <TextField
              label="Nome de usuário *"
              inputProps={register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            ></TextField>
            <TextField
              label="Senha *"
              inputProps={register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            ></TextField>
          </Stack>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Manter conectado" />
          </FormGroup>
          <Button type="submit" variant="contained">
            Entrar
          </Button>
          <div>
            <Typography onClick={() => history.push("/")}>
              Esqueceu a senha?
            </Typography>
            <Typography onClick={() => history.push("/signup")}>
              Não tem uma conta? Cadastre-se!
            </Typography>
          </div>
        </form>
      </Container>
    </Stack>
  );
}
