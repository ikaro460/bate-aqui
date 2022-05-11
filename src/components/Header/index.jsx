import { AppBar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

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

  return(
    <StyledAppBar elevation={0} >

      <IconButton>
        <MenuIcon sx={{color: "#fff"}} />
      </IconButton>

      <Typography>BateAqui</Typography>

      <Typography>est</Typography>

    </StyledAppBar>
  )

}