import { styled } from "@mui/material/styles";

export const BoxLogin = styled("Stack")(({ theme }) => ({
  //   color: theme.palette.primary.contrastText,
  //   backgroundColor: theme.palette.primary.main,
  //   padding: theme.spacing(1),
  //   borderRadius: theme.shape.borderRadius,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100&",
}));

export const BoxForm = styled("Stack")(({ theme }) => ({
  //   color: theme.palette.primary.contrastText,
  //   backgroundColor: theme.palette.primary.main,
  //   padding: theme.spacing(1),
  //   borderRadius: theme.shape.borderRadius,

  justifyContent: "center",
  alignItems: "center",
  margin: "25px",
  h1: { fontSize: "20px" },
  Typography: { color: "blue" },
}));

export const IconBox = styled("div")(({ theme }) => ({
  //   color: theme.palette.primary.contrastText,
  //   backgroundColor: theme.palette.primary.main,
  //   padding: theme.spacing(1),
  //   borderRadius: theme.shape.borderRadius,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TypographyBox = styled("Stack")(({ theme }) => ({
  //   color: theme.palette.primary.contrastText,
  //   backgroundColor: theme.palette.primary.main,
  //   padding: theme.spacing(1),
  //   borderRadius: theme.shape.borderRadius,

  color: "blue",
}));
