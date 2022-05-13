import { Box, Button, Link, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SingupScream = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "90vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const BoxSingup = styled(Paper)(({ theme }) => ({
  width: "max-content",
  height: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "20px",
}));

export const BoxSingupPadlock = styled(Box)(({ theme }) => ({
  width: "max-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "13px",
}));

export const BoxPadlock = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  padding: "5px",
  width: "max-content",
  backgroundColor: "#01579B",
  borderRadius: "50%",
}));

export const BoxForm = styled("form")(({ theme }) => ({
  elevation: "2",
  width: "300px",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: "15px",
}));

export const InputName = styled(TextField)(({ theme }) => ({
  variant: "outlined",
}));

export const ImputPassword = styled(TextField)(({ tehme }) => ({
  variant: "outlined",
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  backgroundColor: "#0288D1",
}));

export const LinkToLogin = styled(Link)(({ theme }) => ({
  color: "#0288D1",
  textDecoration: "none",
}));
