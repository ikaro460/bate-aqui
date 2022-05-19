import { Box, Button, Card, CardMedia, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup";
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

export default function ModalCreateGroup() {
    const { toggleModalCreateGroup } = useOpenModalCreateGroup();

    const { id } = useParams();

    const [value1, setValue1] = useState(null);

    const [value2, setValue2] = useState(null);

    // console.log(value1)

    // console.log(value2)

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
        formData.checkin = `${("0" + value1.getHours()).slice(-2)}:${(
            "0" + value1.getMinutes()
        ).slice(-2)}`;
        formData.checkout = `${("0" + value2.getHours()).slice(-2)}:${(
            "0" + value2.getMinutes()
        ).slice(-2)}`;
        formData.userId = parseInt(id);
        formData.type = "coach";

        api.post("/groups", formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        })
            .then((res) => {
                console.log(res);
                toggleModalCreateGroup();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <StyledBox onSubmit={handleSubmit(onSubmit)} component="form">
            <IconButton
                onClick={toggleModalCreateGroup}
                sx={{ position: "absolute", top: 0, right: 0 }}
            >
                <CloseIcon sx={{ color: "text.primary" }} />
            </IconButton>

            <Typography variant="h4" mb="35px" color="text.primary">
                Nova turma
            </Typography>

            <Stack spacing={2} alignItems="center">
                <TextField label="Nome do grupo" inputProps={register("name")} />

                <MobileTimePicker
                    label="Check-in"
                    ampm={false}
                    value={value1}
                    onChange={(newValue) => {
                        setValue1(new Date(newValue));
                    }}
                    renderInput={(params) => <TextField color="primary" {...params} />}
                    required
                />

                <MobileTimePicker
                    label="Check-out"
                    ampm={false}
                    value={value2}
                    onChange={(newValue) => {
                        setValue2(new Date(newValue));
                    }}
                    renderInput={(params) => <TextField color="primary" {...params} />}
                    required
                />

                <Button type="submit" variant="contained">
                    Criar
                </Button>
            </Stack>
        </StyledBox>
    );
}
