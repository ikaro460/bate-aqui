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
    padding: "35px 35px",
    position: "relative",
    minHeight: "300px",
    backgroundColor: theme.palette.background.primary,

    [theme.breakpoints.down("sm")]: {
        width: "260px",
    },
}));

export default function ModalNotification() {

    const {toggleModalNotification} = useOpenModalNotification();    

    const { notify, verifyNotify, setVerifyNotify } = useCoachGroups();
   
    const changeStatus = (id, value) => {
        const data = { "status_aceito": value }

        api.patch(`/coach/${id}`, data)

        setVerifyNotify(!verifyNotify)
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
                {notify.length !==0 ? notify.map((item) => {
                    return (
                        <Box key={item.id} sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography sx={{fontSize: 12}} color="text.primary">
                                {`Você foi convidado a entrar no Grupo: ${item.groupName}`}
                            </Typography>
                            <Stack spacing={2} justifyContent="center" direction='row'>
                            <Button sx={{width: 30}} variant="contained" onClick={() => changeStatus(item.id, 1)}>
                                Aceitar
                            </Button>
                            <Button variant="contained" onClick={() => changeStatus(item.id, 2)}>
                                Recusar
                            </Button>
                            </Stack>                            
                        </Box>
                    )
                }) : <Stack sx={{p: '50px 0 50px 0', backgroundColor: "lightgray", borderRadius: '10px'}}> <Typography sx={{fontSize: 20, fontWeight: 'bold'}}  color="text.primary">Você não possui Notificações!</Typography> </Stack>}
            </Stack>
        </StyledBox>
    )
}