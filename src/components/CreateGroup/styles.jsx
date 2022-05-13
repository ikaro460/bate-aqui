import { Card } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"

export const StyledCard = styled(Card)(({theme}) => ({
    width: "320px",
    height: "290px",
    padding: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down('sm')]: {
      width: "260px"
    }
  }))