import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  BoxForm,
  BoxPadlock,
  BoxSingup,
  BoxSingupPadlock,
  ButtonSubmit,
  LinkToLogin,
  LoginScreen,
} from "./styles.jsx";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoginBackground from "../../imgs/Asset 1.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { ToastError, ToastSuccess } from "../../components/Toasts/Index.jsx";

const useStyles = makeStyles((themes) => ({
  img: {
    height: "300px",
  },
}));

export default function Login() {
  const history = useHistory();

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("accessToken") || false
  );

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
        const { accessToken } = res.data;
        const { user } = res.data;

        localStorage.clear();
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", user.id);

        ToastSuccess("O login foi um sucesso");
        setAuthenticated(true);
      })
      .catch((err) => () => ToastError("Email ou senha inválidos"));
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
            <LockOutlinedIcon sx={{ color: "text.secondary" }} />
          </BoxPadlock>
          <Typography variant="h4" color="text.primary">
            Login
          </Typography>
        </BoxSingupPadlock>
        <BoxForm onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            variant="outlined"
            label="E-mail"
            inputProps={register("email")}
            error={!!errors.name}
            helperText={errors.name?.message}
            size="small"
          />
          <TextField
            variant="outlined"
            label="Senha"
            inputProps={register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            size="small"
            type="password"
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography variant="h5">Mantenha-me conectado</Typography>
              }
            />
          </FormGroup>
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
