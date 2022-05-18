import {
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
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { api } from "../../services/api";
import { useOpenModalNotification } from "../../provider/OpenModalNotification";
import {useCoachGroups} from '../../provider/CoachGroups'

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

export default function ModalNotification() {

    const {toggleModalNotification} = useOpenModalNotification();    

    const { notify } = useCoachGroups();
   
    const changeStatus = (id, value) => {
        const data = { "status_aceito": value }

        api.patch(`/coach/${id}`, data)
    }

    return (
        <StyledBox component="div">
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
                {notify && notify.map((item) => {
                    return (
                        <Box key={item.id}>
                            <Typography color="text.primary">
                                Você foi convidado a entrar na Turma M2 2022
                            </Typography>
                            <Stack spacing={2} justifyContent="center" direction='row'>
                            <Button variant="contained" onClick={() => changeStatus(item.id, 1)}>
                                Aceitar
                            </Button>
                            <Button variant="contained" onClick={() => changeStatus(item.id, 2)}>
                                Recusar
                            </Button>
                            </Stack>                            
                        </Box>
                    )
                })}
                
            </Stack>
        </StyledBox>
    )
}