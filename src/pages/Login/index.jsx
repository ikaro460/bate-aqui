import { FormControlLabel, TextField, useMediaQuery } from "@mui/material";
import {
  BoxForm,
  BoxPadlock,
  BoxSingup,
  BoxSingupPadlock,
  ButtonSubmit,
  CheckboxGroup,
  DivCheckBox,
  LinkToLogin,
  LoginScreen,
} from "./styles.jsx";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoginBackground from "../../imgs/Asset 1.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

const useStyles = makeStyles((themes) => ({
  img: {
    height: "300px",
  },
}));

export default function Login() {
  const history = useHistory();

  const [authenticated, setAuthenticated] =
    localStorage.getItem("accessToken") || [];

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio").email("Email invalido"),
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

  useEffect(() => {
    if (!!authenticated) {
      return history.push("/home");
    }
  }, [authenticated]);

  const onSubmitFunction = (formData) => {
    console.log("oi");
    console.log(formData);

    api
      .post("/login", formData)
      .then((res) => {
        const { accessToken } = res;
        const { id } = res.user;

        localStorage.clear();
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", id);

        setAuthenticated(true);
        toast.success("O login foi um sucesso");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  const isActive = useMediaQuery(`(min-width:800px)`);

  return (
    <LoginScreen>
      {isActive && (
        <img
          className={classes.img}
          src={LoginBackground}
          alt="login-background"
        />
      )}
      <BoxSingup>
        <BoxSingupPadlock>
          <BoxPadlock>
            <LockOutlinedIcon />
          </BoxPadlock>
          <h2>Login</h2>
        </BoxSingupPadlock>
        <BoxForm onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            variant="outlined"
            label="E-mail"
            inputProps={register("email")}
            error={!!errors.name}
            helperText={errors.name?.message}
            placeholder="E-mail"
            size="small"
          />
          <TextField
            variant="outlined"
            label="Senha"
            inputProps={register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            placeholder="Senha"
            size="small"
            type="password"
          />
          <DivCheckBox>
            <FormControlLabel
              control={<CheckboxGroup color="primary" defaultChecked />}
              label="Manter conectado"
            />
          </DivCheckBox>
          <ButtonSubmit variant="contained" type="submit">
            Entrar
          </ButtonSubmit>
          <Link to="/signup">
            <LinkToLogin>Não tem uma conta? Cadastre-se!</LinkToLogin>
          </Link>
        </BoxForm>
      </BoxSingup>
    </LoginScreen>
  );
}
