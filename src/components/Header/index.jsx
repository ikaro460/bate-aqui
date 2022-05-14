import { AppBar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useSideBar } from "../../provider/SideBar";
import { useHistory } from "react-router-dom";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "56px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "static",

  backgroundColor: theme.palette.primary.dark,
}))


export default function Header() {

  const [logged, setLogged] = useState(false)

  const { toggleSideBar } = useSideBar()

  const history = useHistory()

  return(
    <StyledAppBar elevation={0} >

      <IconButton onClick={toggleSideBar}  >
        <MenuIcon sx={{color: "#fff"}} />
      </IconButton>

      <Typography onClick={ () => history.push("/")} >BateAqui</Typography>

      {logged ? (
        <Typography>est</Typography>
      ):(<Button sx={{color: "#fff"}} >Login</Button>)}

    </StyledAppBar>
  )

}