import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Checkbox } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Vetor from "../../components/Vetor";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  SingupScream,
  BoxPadlock,
  BoxSingupPadlock,
  BoxSingup,
  BoxForm,
  InputName,
  DivName,
  InputSurname,
  ImputEmail,
  ImputPassword,
  DivCheckBox,
  ButtonSubmit,
  LinkToLogin,
} from "./styles";
import { Link } from "react-router-dom";

export default function Singup() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    surname: yup.string().required("Campo obrigatorio"),
    email: yup.string().required("Campo obrigatorio").email("Email invalido"),
    password: yup.string().required("Campo obrigatorio").min(8, "Senha fraca"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory()

  const redirection = (data) => {
    return(
      localStorage.clear(),
      localStorage.setItem("@bateAqui/userToken" , data),
      history.push("/home")
    )
  }

  const handleOnSubmit = (data) => {
    console.log(data);
    axios
      .post("https://bateaqui-api.herokuapp.com/register", data)
      .then((response) => redirection(response.data.accessToken))
      .catch((err) => console.log(err));
  };

  const isActive = useMediaQuery(`(min-width:800px)`);
  return (
    <SingupScream>
      <BoxSingup>
        <BoxSingupPadlock>
          <BoxPadlock>
            <LockOutlinedIcon />
          </BoxPadlock>
        </BoxSingupPadlock>
        <BoxForm onSubmit={handleSubmit(handleOnSubmit)}>
          <DivName>
            <InputName
              inputProps={register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              placeholder="Nome"
              size="small"
            />
            <InputSurname
              inputProps={register("surname")}
              error={!!errors.surname}
              helperText={errors.surname?.message}
              placeholder="Sobrenome"
              size="small"
            />
          </DivName>
          <ImputEmail
            inputProps={register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            placeholder="Email"
            size="small"
            type="email"
          />
          <ImputPassword
            inputProps={register("password")}
            error={errors.password}
            helperText={errors.password?.message}
            placeholder="Senha"
            size="small"
            type="password"
          />
          <DivCheckBox>
            <Checkbox required />

            <p>Aceito os termos de uso</p>
          </DivCheckBox>
          <ButtonSubmit variant="contained" type="submit">
            Cadastrar-se
          </ButtonSubmit>
          <Link to="/login">
            <LinkToLogin>já tem uma conta? Conecte-se</LinkToLogin>
          </Link>
        </BoxForm>
      </BoxSingup>
      {isActive && <Vetor />}
    </SingupScream>
  );
}
