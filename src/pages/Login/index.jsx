import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

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
    <>
      <Container>
        <img src=".\imgs\Asset 1.png" alt="background-img" />
      </Container>
      <Container maxWidth="sm">
        <div>
          <LockOutlinedIcon />
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Manter conectado"
            />
          </FormGroup>
          <Button type="submit" variant="contained">
            Entrar
          </Button>
          <div>
            <span onClick={() => history.push("/")}>Esqueceu a senha?</span>
            <span onClick={() => history.push("/signup")}>
              Não tem uma conta? Cadastre-se!
            </span>
          </div>
        </form>
      </Container>
    </>
  );
}
