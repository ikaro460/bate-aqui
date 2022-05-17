import { Box, Button, Card, CardMedia, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import asset from "../../imgs/Asset 1.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((themes) => ({
  img: {
    maxWidth: "800px",
    marginBottom: "25px",

    objectFit: "contain",
  },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  // paddingTop: "150px",
  // padding: "150px 15px 35px 15px",
  padding: "auto 15px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // flexDirection: "row",
  // flexWrap: "wrap",
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
  const classes = useStyles();

  const isActive = useMediaQuery(`(min-width:800px)`);
  return (
    <ContainerBox>
      {isActive && (
        <CardMediaStyle className={classes.img} component="img" image={asset} />
      )}

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
