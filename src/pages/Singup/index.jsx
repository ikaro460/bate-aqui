import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Checkbox, FormGroup, FormControlLabel, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Vetor from "../../components/Vetor";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastError, ToastSuccess } from "../../components/Toasts/Index.jsx";
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

    const history = useHistory();

    const redirection = (data) => {
        return (
            localStorage.clear(),
            localStorage.setItem("@bateAqui/userToken", data),
            ToastSuccess("Sua conta foi criada com sucesso!"),
            history.push("/login")
        );
    };

    const handleOnSubmit = (data) => {
        axios
            .post("https://bateaqui-api.herokuapp.com/register", data)
            .then((response) => redirection(response.data.accessToken))
            .catch((err) => ToastError("E-mail já cadastrado!"));
    };

    const isActive = useMediaQuery(`(min-width:800px)`);
    return (
        <SingupScream>
            <BoxSingup>
                <BoxSingupPadlock>
                    <BoxPadlock>
                        <LockOutlinedIcon sx={{ color: "text.secondary" }} />
                    </BoxPadlock>
                </BoxSingupPadlock>
                <BoxForm onSubmit={handleSubmit(handleOnSubmit)}>
                    <DivName>
                        <InputName
                            inputProps={register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            label="Nome"
                            size="small"
                        />
                        <InputSurname
                            inputProps={register("surname")}
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                            label="Sobrenome"
                            size="small"
                        />
                    </DivName>
                    <ImputEmail
                        inputProps={register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        label="Email"
                        size="small"
                        type="email"
                    />
                    <ImputPassword
                        inputProps={register("password")}
                        error={errors.password}
                        helperText={errors.password?.message}
                        label="Senha"
                        size="small"
                        type="password"
                    />
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label={<Typography variant="h5">Mantenha-me conectado</Typography>}
                        />
                    </FormGroup>
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
