import { Modal, Box, Button, Card, CardMedia, Grid, Stack, TextField, Typography, SpeedDial } from "@mui/material"
import { styled } from '@mui/material/styles';


export const ContainerBox = styled(Box)(({theme}) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.primary,

  padding: "25px 40px",
  
  [theme.breakpoints.down('sm')]: {
    margin: "25px 20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}))

export const StyledCard = styled(Card)(({theme}) => ({
  maxWidth: "320px",
  height: "290px",
  maxHeight: "290px",
  padding: "10px 12px",
  marginBottom: "40px",

  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundColor: theme.palette.background.primary,

  [theme.breakpoints.down('sm')]: {
    width: "260px"
  }
}))

export const ProfileImg = styled(CardMedia)(({theme}) => ({
  // minHeight: "100px",
  width: "134px",
  height: "130px",
  margin: "0px auto",
  objectFit: "contain"
}))

export const StyledGrid = styled(Grid)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}))