import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from "@mui/material";
import { useOpenModalCheckout } from "../../provider/OpenModalCheckout";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { ToastSuccess } from "../Toasts/Index";
import { useHour } from "../../provider/Hour";

const StyledBox = styled(Box)(({ theme }) => ({
    minWidth: "300px",
    maxWidth: "360px",
    width: "100%",
    padding: "35px",
    position: "relative",

    backgroundColor: theme.palette.background.primary,

    [theme.breakpoints.down("sm")]: {
        width: "260px",
    },
}));

const data = new Date()

const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
const dataAtual = dia + '/' + mes + '/' + ano;

export default function ModalCheckout({ name }) {
    const { modalCheckout, toggleModalCheckout, group } = useOpenModalCheckout();

    const { hour } = useHour()

    const [infos, setInfos] = useState("");

    // useEffect(() => {
    //     setInfos({
    //         groupsId: group.groupsId,
    //         userId: group.userId,
    //         id: group.id,

    //     });
    // }, []);

    const schema = yup.object().shape({
        students: yup.string().required("Campo obrigatorio"),
        works: yup.string().required("Campo obrigatorio"),
        problems: yup.string().required("Campo obrigatorio"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData) => {
        formData.userId = group.userId;
        formData.groupsId = group.groupsId;
        formData.coachId = group.id;
        formData.name = name;
        formData.surname = group.surname
        formData.type = "checkout"
        formData.date = dataAtual
        formData.hour = hour

        api.post("/checkin", formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        })
            .then((res) => {
                ToastSuccess("Check-out feito!!");
                toggleModalCheckout();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Modal
            open={modalCheckout}
            onClose={toggleModalCheckout}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <StyledBox onSubmit={handleSubmit(onSubmit)} component="form">
                <IconButton
                    onClick={toggleModalCheckout}
                    sx={{ position: "absolute", top: 0, right: 0 }}
                >
                    <CloseIcon sx={{ color: "text.primary" }} />
                </IconButton>

                <Typography variant="h4" mb="35px" color="text.primary">
                    Check-out
                </Typography>

                <Stack spacing={2} alignItems="center">
                    <TextField
                        rows={2}
                        multiline
                        fullWidth
                        label="Quais devs vocês atenderam?"
                        {...register("students")}
                    />

                    <TextField
                        rows={2}
                        multiline
                        fullWidth
                        label="Quais foram as atividades realizadas?"
                        {...register("works")}
                    />

                    <TextField
                        fullWidth
                        label="Existe alguma eventual pendência que precisa ser reportada?"
                        {...register("problems")}
                    />

                    <Button type="submit" variant="contained">
                        Enviar
                    </Button>
                </Stack>
            </StyledBox>
        </Modal>
    );
}
