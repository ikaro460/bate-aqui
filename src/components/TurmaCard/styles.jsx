import {Card, CardContent, Stack} from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"

export const StyledCard = styled(Card)(({theme}) => ({
    width: "320px",
    height: "290px",
    padding: "0px",

    [theme.breakpoints.down('sm')]: {
      width: "260px"
    }
    
  }))
  
export const ColorCard = styled(CardContent)(({theme}) => ({
  height: "150px",

  position: "relative",
  backgroundColor: "#CDE2ED",
}))
  
export const InfosCard = styled(Stack)(({theme}) => ({
  // height: "100%",
  padding: "10px",

  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "space-between",
}))