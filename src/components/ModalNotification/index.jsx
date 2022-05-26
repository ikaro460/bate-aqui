import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { api } from "../../services/api";
import { useOpenModalNotification } from "../../provider/OpenModalNotification";
import { useCoachGroups } from "../../provider/CoachGroups";
import { ToastError, ToastSuccess } from "../Toasts/Index";

const StyledBox = styled(Box)(({ theme }) => ({
    minWidth: "300px",
    maxWidth: "360px",
    width: "100%",
    padding: "35px 35px",
    position: "relative",
    minHeight: "300px",
    backgroundColor: theme.palette.background.primary,

    [theme.breakpoints.down("sm")]: {
        width: "260px",
    },
}));

export default function ModalNotification() {
    const { toggleModalNotification } = useOpenModalNotification();

    const { notify, verifyNotify, setVerifyNotify } = useCoachGroups();

    const changeStatus = (id, value) => {
        const data = { status_aceito: value };

        api.patch(`/coach/${id}`, data).then(() => {
            value === 1 ? ToastSuccess("Convite aceito") : ToastError("Convite recusado");
        });

        setVerifyNotify(!verifyNotify);
    };
    // console.log(notify);
    return (
        <StyledBox component="div" sx={{ maxHeight: "80vh", overflowY: "auto" }}>
            <IconButton
                onClick={toggleModalNotification}
                sx={{ position: "absolute", top: 0, right: 0 }}
            >
                <CloseIcon sx={{ color: "text.primary" }} />
            </IconButton>
            <Typography variant="h4" mb="35px" color="text.primary">
                Notificações
            </Typography>

            <Stack spacing={2} justifyContent="center" direction="column">
                {notify.length !== 0 ? (
                    notify.map((item) => {
                        return (
                            <Stack key={item.id} spacing={1} sx={{ borderBottom: 1, pb: 1 }}>
                                <Typography variant="p" color="text.primary">
                                    {item.adminName} convidou você para o grupo{" "}
                                    <Typography
                                        ariant="p"
                                        color="text.primary"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {item.groupName}
                                    </Typography>
                                </Typography>
                                <Stack spacing={2} justifyContent="center" direction="row">
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => changeStatus(item.id, 1)}
                                    >
                                        Aceitar
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => changeStatus(item.id, 2)}
                                        color="error"
                                    >
                                        Recusar
                                    </Button>
                                </Stack>
                            </Stack>
                        );
                    })
                ) : (
                    <Stack
                        sx={{
                            p: "50px 0 50px 0",
                            borderTop: 1,
                        }}
                    >
                        {" "}
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} color="text.primary">
                            Você não possui Notificações!
                        </Typography>{" "}
                    </Stack>
                )}
            </Stack>
        </StyledBox>
    );
}
