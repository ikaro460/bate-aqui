import { Box, Button, Card, CardMedia, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import asset from "../../imgs/Asset 1.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((themes) => ({
    img: {
        maxWidth: "800px",
        marginBottom: "25px",

        objectFit: "contain",
    },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    padding: "auto 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    columnGap: "10vw",

    backgroundColor: theme.palette.background.primary,
}));

const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
    width: "40vw",
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
}));

export default function LandingPage() {
    const token = localStorage.getItem("accessToken");
    const idUserLogged = localStorage.getItem("userId");

    const history = useHistory();

    if (token) {
        history.push(`/home/${idUserLogged}`);
    }

    // useEffect(() => {
    //     localStorage.clear();
    // }, []);

    const classes = useStyles();

    const isActive = useMediaQuery(`(min-width:800px)`);

    return (
        <ContainerBox>
            {isActive && <CardMediaStyle className={classes.img} component="img" image={asset} />}

            <Stack spacing={{ xs: 2, sm: 2, md: 3 }} alignItems="center">
                <TypographyStyle color="text.primary">
                    Diga "Presente" de um jeito novo
                </TypographyStyle>

                <Typography variant="h5" color="text.primary">
                    Seja bem vindo a lista de presença escolar do futuro
                </Typography>

                <Stack spacing={5} direction="row">
                    <Link to="/signup">
                        <Button sx={{ color: "text.button" }}>cadastre-se</Button>
                    </Link>

                    <Link to="/login">
                        <Button variant="contained" sx={{ color: "text.secondary" }}>
                            logar
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </ContainerBox>
    );
}
