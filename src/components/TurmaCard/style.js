import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"

export const StyledCard = styled(Card)(({theme}) => ({
    width: "100%",
    maxWidth: "240px",
    minHeight: "220px",
    padding: "0px",
  }))
  
  export const ColorCard = styled(CardContent)(({theme}) => ({
    minHeight: "110px",
  
    position: "relative",
    backgroundColor: "#CDE2ED",
  }))
  
  export const InfosCard = styled(CardContent)(({theme}) => ({
    height: "100%",
    padding: "10px",
  
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }))